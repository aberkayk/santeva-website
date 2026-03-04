# VPS Kurulum Rehberi

Bu rehber, Santeva projesini Ubuntu 22.04/24.04 VPS'e deploy etmek için gereken tek seferlik kurulum adımlarını içerir.

## 1. Sistem Güncelleme

```bash
sudo apt update && sudo apt upgrade -y
```

## 2. Docker Kurulumu

```bash
# Docker GPG key ve repo ekle
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Docker Engine kur
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Kullanıcıyı docker grubuna ekle (sudo olmadan docker kullanmak için)
sudo usermod -aG docker $USER
newgrp docker
```

## 3. Proje Klonlama

```bash
cd ~
git clone https://github.com/aberkayk/santeva-website.git
cd santeva
```

## 4. İlk Deploy

```bash
docker compose build
docker compose up -d
```

Tarayıcıda `http://SUNUCU_IP` adresine giderek uygulamanın çalıştığını doğrulayın.

## 5. GitHub Actions için SSH Key Ayarı

### VPS'te key oluşturma:

```bash
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github-actions -N ""
cat ~/.ssh/github-actions.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Private key'i kopyalama (GitHub'a eklenecek):

```bash
cat ~/.ssh/github-actions
```

Bu çıktıyı kopyalayın.

## 6. GitHub Secrets Ayarları

GitHub repo → Settings → Secrets and variables → Actions → New repository secret:

| Secret Adı    | Değer                          |
| ------------- | ------------------------------ |
| `VPS_HOST`    | Sunucu IP adresi               |
| `VPS_USER`    | SSH kullanıcı adı (örn: root)  |
| `VPS_SSH_KEY` | Yukarıdaki private key içeriği |
| `VPS_PORT`    | SSH portu (varsayılan: 22)     |

## 7. Firewall Ayarları

```bash
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

## 8. Domain DNS Ayarları (Hostinger)

Hostinger panelinde → Domains → santevacare.com → DNS Zone:

| Tür   | Ad    | Değer          | TTL  |
|-------|-------|----------------|------|
| A     | @     | VPS_IP_ADRESI  | 3600 |
| A     | www   | VPS_IP_ADRESI  | 3600 |

DNS yayılması 5-30 dakika sürebilir. Kontrol etmek için:
```bash
dig santevacare.com +short
```

## 9. SSL Sertifikası (Let's Encrypt)

DNS yayıldıktan sonra VPS'te çalıştırın:

```bash
cd ~/santeva
./init-ssl.sh senin@email.com
```

Bu script otomatik olarak:
1. Geçici HTTP-only nginx config ile servisleri başlatır
2. Let's Encrypt'ten SSL sertifikası alır
3. Full HTTPS nginx config'e geçer
4. Nginx'i yeniden başlatır

### SSL Otomatik Yenileme (Cron Job)

```bash
crontab -e
```

Şu satırı ekleyin:
```
0 3 * * * cd ~/santeva && docker compose run --rm certbot renew && docker compose restart nginx
```

## Akış

```
git push main → GitHub Actions → SSH to VPS → git pull → docker compose up --build -d
```

Her `main` branch'e push yapıldığında uygulama otomatik olarak deploy edilecektir.

Site adresi: https://santevacare.com

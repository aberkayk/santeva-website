# Santeva Website - Implementation Prompt

## Brand Overview

**Santeva** is an e-commerce brand specializing in personal wellness and massage devices. Currently selling a hand massage device, the brand will expand into the broader wellness/massage device category. Products are sold through Amazon.

## Brand Identity

- **Brand Name:** Santeva
- **Tagline:** "Feel the Difference" (ya da Türkçe: "Farkı Hisset")
- **Primary Color:** `#8FD0E9` (Soft Sky Blue - güven, huzur, sağlık)
- **Color Palette:**
  - Primary: `#8FD0E9` (Sky Blue)
  - Primary Dark: `#5BA8C8` (Deep Sky)
  - Primary Light: `#B8E2F2` (Ice Blue)
  - Accent: `#2D3748` (Charcoal - kontrast ve profesyonellik için)
  - Accent Warm: `#E8B86D` (Warm Gold - premium hissi için)
  - Background Light: `#F7FBFD` (Almost White Blue tint)
  - Background Dark: `#0F1923` (Dark Navy)
  - Text Primary: `#1A202C` (Near Black)
  - Text Secondary: `#718096` (Gray)
  - Text on Primary: `#FFFFFF` (White)
  - Success: `#48BB78` (Green)
  - Surface: `#FFFFFF` (White)

## Typography

- **Headings:** Inter veya Satoshi (modern, clean, geometric sans-serif)
- **Body:** Inter (okunabilirlik)
- **Display/Hero:** Font weight 700-800, letter-spacing tight

## Website Structure & Sections

### 1. Navigation (Sticky Header)
- Logo (sol taraf)
- Hamburger menu (mobilde)
- Navigation linkleri: Anasayfa, Ürünler, Hakkımızda, İletişim
- "Amazon'da Satın Al" CTA butonu (sağ taraf)
- Scroll'da background blur + shadow efekti

### 2. Hero Section
- Full-screen hero with parallax background
- Büyük, bold başlık: "Ellerinize Hak Ettiği Bakımı Verin"
- Alt başlık: Kısa marka açıklaması
- CTA: "Ürünleri Keşfet" + "Amazon'da İncele"
- Floating product image with subtle rotation/float animation
- Gradient overlay (brand colors)
- Scroll indicator (animated chevron)

### 3. Trust Bar / Social Proof Strip
- Amazon rating (yıldızlar + sayı)
- "1000+ Mutlu Müşteri" badge
- "Hızlı Kargo" / "Garantili" / "Kolay İade" ikonları
- Scroll ile fade-in + slide-up animasyonu

### 4. Featured Product Section
- Büyük ürün görseli (el masaj aleti)
- Ürün adı ve kısa açıklama
- Key features (3-4 madde, ikon ile)
  - Ergonomik Tasarım
  - 6 Farklı Masaj Modu
  - Şarj Edilebilir
  - Taşınabilir
- Fiyat bilgisi
- "Amazon'da Satın Al" butonu
- Scroll ile stagger animation (her feature card sırayla gelir)

### 5. How It Works / Benefits Section
- 3 adımlı kullanım rehberi
- Her adım: Numara + İkon + Başlık + Açıklama
- Scroll-triggered step-by-step reveal animation
- Bağlantı çizgileri veya timeline efekti

### 6. Product Showcase / Gallery
- Ürün görselleri grid'i
- Hover efektleri (zoom, overlay)
- Lightbox görüntüleme
- Scroll ile masonry-style reveal

### 7. Customer Reviews
- Amazon'dan seçme yorumlar
- Carousel/slider format
- Yıldız rating gösterimi
- Müşteri adı ve tarih
- Auto-scroll + manual navigation

### 8. Brand Story / About Section
- Markanın hikayesi (kısa, etkileyici)
- Misyon ve vizyon
- "Neden Santeva?" value propositions
- Background parallax veya gradient animation

### 9. Newsletter / CTA Section
- "Yeni ürünlerden haberdar olun"
- Email signup formu
- İndirim kodu teşviki
- Gradient background with floating shapes

### 10. Footer
- Logo ve marka açıklaması
- Hızlı linkler
- İletişim bilgileri
- Sosyal medya ikonları
- Amazon store linki
- Copyright

## Scroll Animations (Detaylı)

### Animation Library: Framer Motion

Tüm scroll animasyonları **Framer Motion** ile implement edilecek.

### Animation Patterns:

1. **Fade In Up:** Elementler aşağıdan yukarı doğru fade-in yapar
   - `initial={{ opacity: 0, y: 40 }}`
   - `whileInView={{ opacity: 1, y: 0 }}`
   - Kullanım: Başlıklar, paragraflar, kartlar

2. **Stagger Children:** Alt elementler sırayla animate olur
   - `staggerChildren: 0.1` veya `0.15`
   - Kullanım: Feature kartları, grid itemları, liste elemanları

3. **Scale In:** Elementler küçükten büyüğe doğru açılır
   - `initial={{ opacity: 0, scale: 0.8 }}`
   - `whileInView={{ opacity: 1, scale: 1 }}`
   - Kullanım: İkonlar, badge'ler, image'lar

4. **Slide In (Left/Right):** Sağdan veya soldan kayarak giriş
   - `initial={{ opacity: 0, x: -60 }}` veya `x: 60`
   - Kullanım: Split-layout section'lar, alternating content

5. **Parallax Scroll:** Farklı hızlarda scroll eden katmanlar
   - `useScroll()` + `useTransform()` ile
   - Kullanım: Hero background, decorative elements

6. **Counter Animation:** Rakamlar sıfırdan hedefe doğru sayar
   - Kullanım: İstatistikler, müşteri sayısı

7. **Reveal on Scroll:** Viewport'a girince clip-path ile açılma
   - Kullanım: Section geçişleri, image reveal

8. **Floating Animation:** Sürekli yukarı-aşağı salınım
   - `animate={{ y: [0, -10, 0] }}` infinite repeat
   - Kullanım: Hero product image, decorative elements

9. **Scroll Progress:** Sayfanın scroll progress'ini gösteren bar
   - `useScroll()` ile top progress bar
   - Kullanım: Reading progress indicator

10. **Text Reveal:** Kelime kelime veya harf harf ortaya çıkma
    - `staggerChildren: 0.03` per character
    - Kullanım: Hero başlık, önemli mesajlar

### Animation Rules:
- `viewport={{ once: true, amount: 0.3 }}` - Sadece ilk görünümde tetiklen
- Duration: 0.5-0.8s arası (çok hızlı veya yavaş olmamalı)
- Easing: `[0.25, 0.4, 0.25, 1]` (custom cubic-bezier, smooth feel)
- Mobile'da animasyonları sadeleştir (performans için)
- `will-change` property'sini dikkatli kullan
- `prefers-reduced-motion` media query'ye saygı göster

## Technical Requirements

### Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui + custom components
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist (mevcut) + display font
- **Images:** Next/Image ile optimize

### Performance
- Lighthouse score > 90 (tüm kategorilerde)
- Lazy loading for images and heavy sections
- Dynamic import for animation-heavy components
- ISR veya static generation
- Image optimization (WebP/AVIF)

### SEO
- Semantic HTML (header, main, section, article, footer)
- Meta tags (title, description, og:image)
- Structured data (Organization, Product)
- Sitemap.xml
- robots.txt

### Responsive Design
- Mobile-first approach
- Breakpoints: sm(640), md(768), lg(1024), xl(1280), 2xl(1536)
- Touch-friendly interactions
- Mobilde basitleştirilmiş animasyonlar

### Accessibility
- WCAG 2.1 AA uyumlu
- Keyboard navigation
- Screen reader uyumlu
- Color contrast ratios
- Focus indicators
- prefers-reduced-motion desteği

## File Structure

```
santeva/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, providers)
│   ├── page.tsx            # Home page (tüm section'ları birleştirir)
│   ├── globals.css         # Global styles, CSS variables, brand colors
│   └── favicon.ico
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/
│   │   ├── header.tsx      # Sticky navigation
│   │   └── footer.tsx      # Site footer
│   ├── sections/
│   │   ├── hero.tsx        # Hero section
│   │   ├── trust-bar.tsx   # Social proof strip
│   │   ├── featured-product.tsx  # Main product showcase
│   │   ├── how-it-works.tsx      # Steps/benefits
│   │   ├── gallery.tsx     # Product gallery
│   │   ├── reviews.tsx     # Customer reviews
│   │   ├── about.tsx       # Brand story
│   │   └── newsletter.tsx  # CTA + email signup
│   └── shared/
│       ├── scroll-animation.tsx   # Reusable scroll animation wrapper
│       ├── section-heading.tsx    # Consistent section titles
│       ├── amazon-button.tsx      # Amazon CTA button
│       └── container.tsx          # Max-width container
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── constants.ts        # Brand colors, links, content
│   └── animations.ts       # Framer Motion animation variants
├── hooks/
│   ├── use-scroll-animation.ts   # Custom scroll animation hook
│   └── use-media-query.ts        # Responsive hook
├── public/
│   ├── images/
│   │   ├── hero-bg.webp
│   │   ├── product-*.webp
│   │   └── logo.svg
│   └── fonts/
├── docs/
│   └── WEBSITE_PROMPT.md   # Bu dosya
└── .claude/
    └── skills/
        └── santeva-design-system.md  # Design & animation skill
```

## Content Notes

- Tüm metin içeriği Türkçe olacak
- Amazon linkleri placeholder olarak bırakılacak (#amazon-link)
- Ürün görselleri placeholder olarak kullanılacak (Next.js Image placeholder="blur")
- İleride çoklu ürün desteği için esnek yapı kurulmalı

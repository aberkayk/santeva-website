# Santeva Design System & Scroll Animations Skill

Bu skill, Santeva markası için website geliştirirken tutarlı tasarım ve scroll animasyonları oluşturmak için kullanılır.

---

## 1. Brand Colors & CSS Variables

Tüm renkler `globals.css` içinde CSS variable olarak tanımlanmalı. Tailwind CSS v4 ile `@theme` directive kullanılır.

```css
@theme {
  --color-brand: #8FD0E9;
  --color-brand-dark: #5BA8C8;
  --color-brand-light: #B8E2F2;
  --color-brand-lightest: #F7FBFD;
  --color-accent: #2D3748;
  --color-accent-warm: #E8B86D;
  --color-surface: #FFFFFF;
  --color-text-primary: #1A202C;
  --color-text-secondary: #718096;
  --color-dark-bg: #0F1923;
}
```

## 2. Typography Scale

```
Hero Display:    text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight
Section Title:   text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight
Section Subtitle: text-lg md:text-xl text-text-secondary font-normal max-w-2xl mx-auto
Card Title:      text-xl md:text-2xl font-semibold
Body Large:      text-lg leading-relaxed
Body:            text-base leading-relaxed
Small:           text-sm text-text-secondary
```

## 3. Spacing & Layout

```
Section Padding:     py-20 md:py-28 lg:py-32
Container:           max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Section Gap:         space-y-16 md:space-y-20
Card Padding:        p-6 md:p-8
Card Border Radius:  rounded-2xl md:rounded-3xl
```

## 4. Component Patterns

### Section Wrapper
Her section bu wrapper ile sarılmalı:
```tsx
<section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

### Section Heading Pattern
```tsx
<div className="text-center mb-12 md:mb-16">
  <motion.span className="inline-block text-sm font-semibold text-brand uppercase tracking-widest mb-4">
    {subtitle}
  </motion.span>
  <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
    {title}
  </motion.h2>
  <motion.p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
    {description}
  </motion.p>
</div>
```

### Amazon CTA Button
```tsx
<a
  href="#amazon-link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full
             font-semibold text-lg shadow-lg shadow-accent/25
             hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30
             hover:-translate-y-0.5 transition-all duration-300"
>
  Amazon'da Satın Al
  <ArrowRight className="w-5 h-5" />
</a>
```

### Feature Card
```tsx
<motion.div
  className="group relative bg-white rounded-2xl p-6 md:p-8
             border border-gray-100 shadow-sm
             hover:shadow-lg hover:shadow-brand/10 hover:border-brand/20
             transition-all duration-300"
>
  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4
                  group-hover:bg-brand/20 transition-colors duration-300">
    <Icon className="w-6 h-6 text-brand" />
  </div>
  <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
  <p className="text-text-secondary leading-relaxed">{description}</p>
</motion.div>
```

## 5. Scroll Animation System (Framer Motion)

### Installation
```bash
npm install framer-motion
```

### Animation Variants (lib/animations.ts)

```typescript
import type { Variants } from "framer-motion";

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

// Scale in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Stagger item (her child item bu variant'ı kullanır)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

// Text reveal (word by word)
export const textRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

export const textRevealWord: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
  },
};

// Floating animation (infinite)
export const floating = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Slow rotate (infinite, subtle)
export const slowRotate = {
  animate: {
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
```

### Reusable Scroll Animation Wrapper (components/shared/scroll-animation.tsx)

```tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: keyof typeof motion;  // "div" | "section" | "article" etc.
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function ScrollAnimation({
  children,
  variants = defaultVariants,
  className,
  delay = 0,
  as = "div",
}: ScrollAnimationProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
```

### Kullanım Örnekleri

**Basit fade-in up:**
```tsx
<ScrollAnimation>
  <h2>Başlık</h2>
</ScrollAnimation>
```

**Stagger children:**
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={staggerContainer}
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {features.map((f) => (
    <motion.div key={f.id} variants={staggerItem}>
      <FeatureCard {...f} />
    </motion.div>
  ))}
</motion.div>
```

**Parallax efekti:**
```tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Background content */}
      </motion.div>
      <div className="relative z-10">
        {/* Foreground content */}
      </div>
    </section>
  );
}
```

**Counter animation:**
```tsx
"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
```

**Scroll progress bar:**
```tsx
"use client";
import { motion, useScroll } from "framer-motion";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
```

## 6. Decorative Elements

### Gradient Blob (Background decoration)
```tsx
<div className="absolute -top-40 -right-40 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-light/20 rounded-full blur-3xl" />
```

### Gradient Section Divider
```tsx
<div className="h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
```

### Dot Grid Pattern
```tsx
<div
  className="absolute inset-0 opacity-5"
  style={{
    backgroundImage: "radial-gradient(circle, #8FD0E9 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  }}
/>
```

## 7. Responsive Animation Rules

```tsx
// Hook: mobilde animasyonları basitleştir
import { useMediaQuery } from "@/hooks/use-media-query";

function useAnimationConfig() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return {
    // Mobilde daha kısa mesafe, daha hızlı
    fadeDistance: isMobile ? 20 : 40,
    duration: isMobile ? 0.4 : 0.6,
    staggerDelay: isMobile ? 0.08 : 0.12,
  };
}
```

### prefers-reduced-motion Desteği
```tsx
// Framer Motion otomatik olarak prefers-reduced-motion'a saygı gösterir.
// Ancak custom animasyonlar için:
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
```

## 8. Image Handling

```tsx
import Image from "next/image";

// Product image with hover effect
<div className="relative group overflow-hidden rounded-2xl">
  <Image
    src="/images/product-1.webp"
    alt="Santeva El Masaj Aleti"
    width={600}
    height={600}
    className="object-cover transition-transform duration-500 group-hover:scale-105"
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJ..."
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
```

## 9. Button Variants

```
Primary:     bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/25
Secondary:   bg-white text-accent border border-gray-200 hover:border-brand hover:text-brand
Ghost:       text-text-secondary hover:text-brand hover:bg-brand/5
Amazon:      bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25
Outline:     border-2 border-brand text-brand hover:bg-brand hover:text-white
```

Tüm butonlarda:
- `rounded-full` (pill shape)
- `px-6 py-3` veya `px-8 py-4` (büyük CTA)
- `font-semibold`
- `transition-all duration-300`
- `hover:-translate-y-0.5` (subtle lift)

## 10. Shadow System

```
Card Default:   shadow-sm
Card Hover:     shadow-lg shadow-brand/10
CTA Button:     shadow-lg shadow-brand/25
Hero Product:   shadow-2xl shadow-brand/20
Modal/Popup:    shadow-xl
```

## 11. Glassmorphism (Header, Cards)

```css
/* Sticky header */
.glass-header {
  @apply bg-white/80 backdrop-blur-lg border-b border-gray-100/50;
}

/* Glass card */
.glass-card {
  @apply bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl;
}
```

## 12. Checklist - Her Section İçin

- [ ] Desktop (1440px) görünümü doğru
- [ ] Tablet (768px) görünümü doğru
- [ ] Mobile (375px) görünümü doğru
- [ ] Scroll animasyonu çalışıyor
- [ ] Hover efektleri çalışıyor
- [ ] Accessibility (keyboard nav, screen reader)
- [ ] Performance (lazy loading, optimized images)
- [ ] prefers-reduced-motion desteği
- [ ] Dark mode uyumlu (opsiyonel, v2)

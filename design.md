# Avan Sahu — Portfolio Design System

> **Aesthetic**: Neubrutalism / Brutalist Web Design
> **Framework**: Next.js 14 (App Router) + Tailwind CSS v4 (`@theme inline`)
> **Font**: Hanken Grotesk (all weights via Google Fonts)

---

## 1. Color Tokens

All colors are defined as CSS custom properties inside `globals.css` via `@theme inline`:

| Token                     | Hex       | Usage                                      |
|---------------------------|-----------|----------------------------------------------|
| `--color-brand-orange`    | `#ff6b35` | Primary accent, CTAs, hover states, marquee  |
| `--color-brand-dark`      | `#1a1a1a` | Deep black variant                           |
| `--color-brand-light`     | `#f5f5f5` | Off-white backgrounds, cards                 |
| `--color-brand-purple`    | `#8b5cf6` | Secondary accent, hover states, Projects bg  |
| `--color-bg-primary`      | `#fcfcfc` | Page background                              |
| `--color-text-primary`    | `#000000` | All body text                                |

### Accent Colors (Achievements)
These are used in the Achievements component for color-coded cards:
- `accent-coral`, `accent-teal`, `accent-purple`, `accent-electric`

---

## 2. Typography

| Element     | Weight    | Tracking    | Leading       |
|-------------|-----------|-------------|---------------|
| `h1`        | `900`     | `tighter`   | `0.82–0.9`    |
| `h2` (hero) | `900`     | `tighter`   | `0.85`        |
| `h3`        | `900`     | `tight`     | `tight`       |
| Body        | `700`     | normal      | `relaxed`     |
| Labels      | `900`     | `widest`    | normal        |
| Mono/Code   | `mono`    | `widest`    | normal        |

- All headings use `uppercase`.
- Letters have `letter-spacing: -0.04em` applied globally.

---

## 3. Brutalist Design Primitives

### Borders
- **Standard**: `border-4 border-black` (4px solid black on everything)
- **Dividers**: `border-b-4 border-black` or `border-t-4 border-black`
- No rounded corners (no `rounded-*` classes)

### Shadows (Custom Utilities)
```css
.brutalist-shadow    { box-shadow: 8px 8px 0px 0px rgba(0,0,0,1); }
.brutalist-shadow-lg { box-shadow: 12px 12px 0px 0px rgba(0,0,0,1); }
.brutalist-shadow-xl { box-shadow: 16px 16px 0px 0px rgba(0,0,0,1); }
```

### Hover States
- `hover:translate-x-1 hover:-translate-y-1` (shift right+up on hover)
- `hover:bg-brand-orange hover:text-black` or `hover:bg-brand-purple hover:text-white`
- All transitions use `transition-none` (instant, no easing — deliberate brutalism)

### Text Shadows (for giant headings)
```
textShadow: "4px 4px 0px var(--color-brand-orange), 8px 8px 0px rgba(0,0,0,0.15)"
textShadow: "6px 6px 0px #fff"  (white shadow on purple bg)
```

---

## 4. Layout Patterns

### Section Container
```
max-w-[1400px] mx-auto px-4 md:px-8
```

### Section Background Rhythm
| Section      | Background       | Border                    |
|--------------|------------------|---------------------------|
| Hero         | `bg-[#fcfcfc]`   | none                      |
| Marquee      | `bg-brand-orange`| `border-y-4 border-black` |
| About        | `bg-[#fcfcfc]`   | `border-t-4 border-black` |
| Projects     | `bg-brand-purple`| `border-y-4 border-black` |
| Experience   | `bg-brand-orange`| `border-b-4 border-black` |
| Leadership   | `bg-white`       | `border-b-4 border-black` |
| Contact CTA  | `bg-brand-orange`| inside white footer       |
| Footer       | `bg-white`       | `border-t-4 border-black` |

### Page Flow
```
Hero → Marquee → About → Projects → Experience/Timeline → Leadership → Contact
```

---

## 5. Component Patterns

### Card Pattern
```jsx
<div className="border-4 border-black bg-white p-8 brutalist-shadow hover:translate-x-1 hover:-translate-y-1 transition-none">
  {/* content */}
</div>
```

### Badge / Tag
```jsx
<span className="border-4 border-black px-4 py-2 font-black text-sm uppercase brutalist-shadow">
  {text}
</span>
```

### CTA Button
```jsx
<a className="bg-black text-white border-4 border-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-brand-orange hover:text-black hover:translate-x-1 hover:-translate-y-1 brutalist-shadow transition-none">
  {label}
</a>
```

### Section Heading (Giant)
```jsx
<h2
  className="text-7xl md:text-[10rem] font-black leading-none mb-16 md:mb-24 text-black uppercase"
  style={{ textShadow: "6px 6px 0px #fff" }}
>
  SECTION TITLE
</h2>
```

### Table/Grid Row (Experience Pattern)
```jsx
<div className="grid grid-cols-12 gap-4 border-b-2 border-black py-6 hover:bg-brand-purple hover:text-white transition-none group cursor-default">
  {/* col-span-2: Date | col-span-7: Title | col-span-3: Badge */}
</div>
```

---

## 6. Animations

### Marquee
```css
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
```
Used on the skills ticker strip below the hero.

### Scroll Reveal
```css
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```
Triggered via `useScrollReveal()` hook with IntersectionObserver.

### Pulse
`animate-pulse` on the green "available" dot in the hero.

---

## 7. File Structure

```
src/
├── app/
│   ├── globals.css        # Design tokens + animations + utilities
│   ├── layout.tsx         # Root layout (font, metadata, Navbar)
│   └── page.tsx           # Main page — composes all sections
├── components/
│   ├── Navbar.tsx          # Fixed top nav
│   ├── MobileNav.tsx       # Full-screen mobile overlay
│   ├── Hero.tsx            # Landing hero w/ toggle
│   ├── About.tsx           # Intro + skills grid
│   ├── Projects.tsx        # Featured work cards
│   ├── Experience.tsx      # Timeline + Leadership
│   ├── Achievements.tsx    # Wall of Honor cards
│   ├── Contact.tsx         # CTA + footer
│   └── Positions.tsx       # (emptied, unused)
├── data/
│   └── siteData.ts         # Single source of truth for all content
└── hooks/
    └── useScrollReveal.ts  # IntersectionObserver for reveal-on-scroll
```

---

## 8. Data Architecture

All content lives in `siteData.ts`. Components import and render from it.
When adding a new section:
1. Define an **interface** and **export const** data array in `siteData.ts`
2. Create a component in `components/` that imports that data
3. Add the component to `page.tsx`
4. Add a nav entry in `navSections` if needed
5. Add a nav link in `Navbar.tsx` and `MobileNav.tsx`

---

## 9. Design Rules

1. **No rounded corners** — everything is hard-edged rectangles
2. **No gradients** — use flat solid colors only
3. **No soft shadows** — use hard offset box-shadows (brutalist-shadow)
4. **No smooth transitions** — use `transition-none` for instant state changes
5. **Bold everything** — minimum `font-bold`, prefer `font-black` (900)
6. **UPPERCASE everything** — headings, labels, buttons, tags
7. **High contrast** — black on white, white on orange/purple, no subtle grays
8. **Generous padding** — `p-8` minimum on cards, `py-16 md:py-32` on sections
9. **Thick borders** — `border-4` everywhere, `border-2` for subtle dividers
10. **Interactive states** — hover shifts (translate), color inversions, no opacity fades

# EVORIGEN Design System (DESIGN.md)

This document outlines the visual identity, design tokens, and core components for the **EVORIGEN** platform. It serves as the source of truth for extending the marketing website and SaaS application, ensuring a consistent, premium enterprise experience.

---

## 1. Brand Philosophy
**EVORIGEN** is an AI-Powered Legacy Intelligence Platform. The design language communicates:
- **Intelligence & Continuity:** Abstract knowledge graphs, interconnected nodes, and empirical data visualizers.
- **Enterprise & Premium SaaS:** Copious whitespace, clean typography, floating surfaces, and energetic warm orange precision accents.
- **Editorial & Technical:** A balance between sophisticated editorial storytelling (serif accents, asymmetric layouts) and technical precision (monospace data points, thin geometric lines).

---

## 2. Color Palette

The EVORIGEN color system relies on a clean white/neutral canvas, punctuated by powerful **Vibrant Orange (`#FF4D00`)** primary accents, and grounded in rich dark tones for atmospheric sections.

### Primary Brand
- **Vibrant Orange (Primary Action/Focus):** `#FF4D00`
- **Deep Burnt Orange (Gradients/CTA Sections):** `#E03E00` / `#C42B00`
- **Rich Dark Orange (Dark Sections):** `#8C2300` / `#2B0A00`
- **Midnight Dark (Atmospheric Backgrounds):** `#1A0600`
- **Black (Main Typography/Headings):** `#0B0D12`
- **White (Primary Surface):** `#FFFFFF`

### Neutrals (Surfaces & Borders)
- **Soft Orange Tint (Active Navigation/Soft Pills):** `#FFF0EB`
- **Soft White (Secondary Backgrounds):** `#F7F8FA`
- **Subtle Gray (Hover States/Soft Cards):** `#EEF2F8`
- **Cool Gray (Borders):** `#E9EDF3` / `#FFD8CC`
- **Muted Gray (Secondary Text/Metadata):** `#667085`

### Accent Glows (Used Sparingly via Blurs)
Used exclusively for soft, diffused under-card lighting (`glow-blur-bottom-*` classes) and status indicators:
- **Warm Orange Glow:** `#FF4D00`
- **Soft Amber/Yellow:** `#FFF0A6`
- **Soft Coral:** `#FFB4B4`
- **Lime (Success/Operational):** `#B8F27C`

---

## 3. Typography

The platform utilizes three typefaces to establish hierarchy and tone:

1. **Primary Interface: Raleway**
   - *Usage:* Navigation, buttons, headings, body text, cards, labels.
   - *Weights:* 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold).
   - *Feel:* Clean, geometric, modern.

2. **Editorial Display: Instrument Serif**
   - *Usage:* Sparingly applied to select hero words, major editorial statements, and strategic quotes (italicized).
   - *Feel:* Premium, sophisticated, human.

3. **Technical Data: JetBrains Mono**
   - *Usage:* System identifiers, node counts, data metrics, code snippets.
   - *Feel:* Precision, engineering, infrastructure.

---

## 4. Surfaces, Depth, & Shadows

The UI avoids generic glassmorphism and heavy borders. Instead, it relies on soft, diffused shadows and subtle edge definitions.

### Card System (`<GlassCard />`)
Cards have large border radii (typically 20px - 28px) and large internal padding to allow content to breathe.

- **Elevated (Standard White):** White background, `#E9EDF3` border, soft 60px shadow.
- **Soft (Secondary White):** `#F7F8FA` background, minimal shadow.
- **Atmospheric Orange/Dark:** `#2B0A00` background, 10% white border, deep floating shadow.
- **Glow Cards (`glow-yellow`, `glow-cyan`, `glow-coral`):** Standard white cards with a custom CSS pseudo-element projecting a heavily blurred (35px), low-opacity colored light from the bottom edge.

### Shadow Tokens (Tailwind Configuration)
- `shadow-card`: `0 20px 60px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03)`
- `shadow-card-hover`: `0 28px 75px rgba(255, 77, 0, 0.12), 0 2px 6px rgba(0,0,0,0.04)`
- `shadow-floating`: `0 32px 100px rgba(43, 10, 0, 0.22)`
- `shadow-glow-orange`: `0 0 30px rgba(255, 77, 0, 0.25)`

---

## 5. UI Components & Layout

### Grid & Whitespace
- **Max Width:** `1280px` (max-w-7xl)
- **Padding:** Copious vertical padding between sections (e.g., `py-20` / 80px).
- **Asymmetry:** Grid layouts (`grid-cols-12`) offset content to avoid rigid 50/50 splits.

### Badges (`<Badge />`)
Pill-shaped identifiers for tags and statuses.
- Use a dot-indicator `w-1.5 h-1.5 rounded-full` alongside text.
- Bold, tracking-wide font (`text-[11px]` or `text-[12px]`).
- Muted background tints (e.g., `bg-orange-50 text-brand-orange border-orange-200`).

### Buttons
- **Primary:** Vibrant Orange background (`#FF4D00`), white text, fully rounded pill (`rounded-pill`), subtle hover translation and shadow.
- **Secondary:** White background, thin border, black text, pill shape.

---

## 6. Implementation Notes

### Tailwind Configuration Integration
The design system is fully mapped into `tailwind.config.js` via the `extend` block. 
- Colors are prefixed with `brand-` (e.g., `bg-brand-orange`, `text-brand-muted`).
- Radii are named semantically (`rounded-card`, `rounded-control`, `rounded-pill`).

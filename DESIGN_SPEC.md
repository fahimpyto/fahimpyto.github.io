# Fahimpyto — Design Specification

## Brand Identity

| Element | Value |
|---------|-------|
| **Name** | Fahim Ahmed |
| **Username** | fahimpyto |
| **Tagline** | Python Automation Engineer · Technical SEO Practitioner · Open Source Developer |
| **Bio** | I build Python automation tools, work on technical SEO, create open-source software, and share practical knowledge through technical writing. |
| **Logo** | Text-based "Fahim Ahmed" in Space Grotesk (no graphic logo) |
| **Domain (current)** | `https://fahimpyto.github.io` |
| **Domain (future)** | `fahimpyto.dev` |

### Social Links

- GitHub: `https://github.com/fahimpyto`
- LinkedIn: (TBD)
- Facebook: `https://www.facebook.com/fahimpyto`
- Email: (TBD)

---

## Color System

### Dark Mode (default)

```css
--color-bg:              #0B1220
--color-surface:         #111827
--color-surface-elevated:#1E293B
--color-primary:         #2563EB
--color-primary-hover:   #1D4ED8
--color-primary-muted:   rgba(37, 99, 235, 0.15)
--color-accent:          #22D3EE
--color-accent-hover:    #06B6D4
--color-success:         #10B981
--color-warning:         #F59E0B
--color-error:           #EF4444
--color-text:            #F8FAFC
--color-text-secondary:  #94A3B8
--color-text-muted:      #64748B
--color-border:          #1E293B
--color-border-light:    #334155
```

### Light Mode

```css
--color-bg:              #FFFFFF
--color-surface:         #F8FAFC
--color-surface-elevated:#FFFFFF
--color-primary:         #2563EB
--color-primary-hover:   #1D4ED8
--color-primary-muted:   rgba(37, 99, 235, 0.08)
--color-accent:          #0891B2
--color-accent-hover:    #0E7490
--color-success:         #059669
--color-warning:         #D97706
--color-error:           #DC2626
--color-text:            #0F172A
--color-text-secondary:  #475569
--color-text-muted:      #94A3B8
--color-border:          #E2E8F0
--color-border-light:    #CBD5E1
```

### Color Usage Guidelines

| Token | Usage |
|-------|-------|
| `bg` | Page background |
| `surface` | Cards, sections, dropdowns |
| `surface-elevated` | Modals, sticky headers, hovered cards |
| `primary` | Buttons, links, active states, accent elements |
| `primary-muted` | Subtle primary backgrounds (badges, alerts) |
| `accent` | Decorative highlights, secondary CTAs |
| `text` | Primary body copy, headings |
| `text-secondary` | Subtle body copy, metadata |
| `text-muted` | Placeholders, disabled text |
| `border` | Default borders |
| `border-light` | Subtle dividers |

---

## Typography

### Font Stack

| Usage | Font | Fallback |
|-------|------|----------|
| Headings | Space Grotesk | sans-serif |
| Body | Inter | sans-serif |
| Code | JetBrains Mono | monospace |

### Type Scale

```css
/* Headings — Space Grotesk */
--text-display: 72px / 1.1    /* Hero name — desktop */
--text-display-sm: 48px / 1.1 /* Hero name — mobile */
--text-h1: 48px / 1.15        /* Page titles */
--text-h2: 36px / 1.2         /* Section headers */
--text-h3: 28px / 1.25        /* Card titles */
--text-h4: 22px / 1.3         /* Subsection headers */

/* Body — Inter */
--text-body-lg: 18px / 1.6    /* Lead paragraphs */
--text-body: 16px / 1.6       /* Body text */
--text-body-sm: 14px / 1.5    /* Secondary text */
--text-caption: 12px / 1.4    /* Captions, badges, tags */

/* Code — JetBrains Mono */
--text-code: 14px / 1.6       /* Inline & code blocks */
--text-code-sm: 12px / 1.5    /* Small code labels */
```

### Font Weights

| Weight | Headings | Body | Code |
|--------|----------|------|------|
| 300 | — | Light (optional) | — |
| 400 | — | Regular | Regular |
| 500 | Medium | Medium | Medium |
| 600 | SemiBold | SemiBold | — |
| 700 | Bold | Bold | Bold |

### Letter Spacing

- Headings: `-0.02em` (tight)
- Body: `normal`
- Caps/small caps: `0.05em`

---

## Spacing Scale

Based on 4px unit:

| Token | px | rem | Usage |
|-------|----|-----|-------|
| `--space-1` | 4 | 0.25 | Micro spacing, icon gaps |
| `--space-2` | 8 | 0.5 | Tight padding, badge gaps |
| `--space-3` | 12 | 0.75 | Small gaps |
| `--space-4` | 16 | 1 | Default padding, card padding |
| `--space-5` | 20 | 1.25 | Section spacing, form gaps |
| `--space-6` | 24 | 1.5 | Card padding, button padding |
| `--space-8` | 32 | 2 | Section top/bottom padding |
| `--space-10` | 40 | 2.5 | Large section spacing |
| `--space-12` | 48 | 3 | Hero padding |
| `--space-16` | 64 | 4 | Page section gaps |
| `--space-20` | 80 | 5 | Major page sections |
| `--space-24` | 96 | 6 | Very large spacing |
| `--space-32` | 128 | 8 | Hero vertical padding |
| `--space-40` | 160 | 10 | Max spacing |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Badges, small elements |
| `--radius-md` | 8px | Cards, inputs, buttons |
| `--radius-lg` | 12px | Large cards, modals |
| `--radius-xl` | 16px | Hero section, feature cards |
| `--radius-full` | 9999px | Pills, avatars, toggle |

---

## Shadows

### Dark Mode

```css
--shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.3)
--shadow-md:   0 4px 6px rgba(0, 0, 0, 0.4)
--shadow-lg:   0 10px 15px rgba(0, 0, 0, 0.5)
--shadow-xl:   0 20px 25px rgba(0, 0, 0, 0.6)
```

### Light Mode

```css
--shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md:   0 4px 6px rgba(0, 0, 0, 0.08)
--shadow-lg:   0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl:   0 20px 25px rgba(0, 0, 0, 0.15)
```

---

## Component Specifications

### 1. Button

| Prop | Values |
|------|--------|
| Variant | `primary`, `secondary`, `ghost`, `icon` |
| Size | `sm`, `md`, `lg` |
| States | default, hover, active, disabled, focus |

**Primary Button (md)**
```
┌──────────────────────┐
│  Label                │
└──────────────────────┘
- Height: 44px
- Padding: 16px 24px
- Radius: 8px
- Background: --color-primary
- Text: white, 15px, 600
- Hover: --color-primary-hover, subtle lift (translateY -1px)
- Active: scale(0.98)
- Focus: ring-2 ring-primary
- Transition: 200ms ease-out
- Icon support: icon on left or right, 16px
```

**Secondary Button**
```
┌──────────────────────┐
│  Label                │
└──────────────────────┘
- Height: 44px
- Padding: 16px 24px
- Radius: 8px
- Background: transparent
- Border: 1.5px solid --color-border
- Text: --color-text
- Hover: border-primary, text-primary
```

**Ghost Button**
```
┌──────────────────────┐
│  Label                │
└──────────────────────┘
- Height: 44px
- Padding: 16px 24px
- Radius: 8px
- Background: transparent
- Text: --color-text-secondary
- Hover: bg --color-surface-elevated, text-primary
```

**Sizes**
| Size | Height | Padding | Font |
|------|--------|---------|------|
| sm | 36px | 12px 16px | 14px |
| md | 44px | 16px 24px | 15px |
| lg | 52px | 20px 32px | 16px |

---

### 2. Card

**Project Card**
```
┌──────────────────────────┐
│                           │
│    ████████████████████   │  ← 16:9 image / video
│    ████████████████████   │
│                           │
├──────────────────────────┤
│  Project Title        ★  │  ← 18px, 600
│  Short description of    │  ← 14px, secondary
│  the project in 1-2      │
│  lines.                  │
│                          │
│  [Python] [CLI] [PyPI]   │  ← badges, 12px
│                          │
│  GitHub →  PyPI →       │  ← icon links, 14px
└──────────────────────────┘
- Width: full (responsive)
- Radius: 12px
- Background: --color-surface
- Border: 1px solid --color-border
- Hover: border-primary, shadow-lg, translateY(-4px)
- Transition: 300ms ease-out
```

**Blog Card**
```
┌────────────────────────────┐
│  ████████████████████████  │  ← 16:9 cover image
│  ████████████████████████  │
├────────────────────────────┤
│  Python       4 min read   │  ← category + reading time
│                            │
│  Article Title Here        │  ← 20px, 600
│  Brief excerpt of the      │
│  article content...        │
│                            │
│  Jul 10, 2026              │  ← date, caption
└────────────────────────────┘
- Same dimensions & behavior as Project Card
```

**Skill Card**
```
┌──────────────────┐
│   🐍 Python      │  ← icon (lucide) + label
│   BeautifulSoup  │
│   Selenium       │  ← skill list, 13px
│   Playwright     │
│   Requests       │
│   Asyncio        │
│                  │
│   5 Projects →   │  ← link, 13px primary
└──────────────────┘
- Width: 280px or flexible
```

**Achievement Card**
```
┌──────────────────────┐
│      45              │  ← --text-h1, bold, primary
│   Published Articles │  ← 14px, secondary
└──────────────────────┘
- Centered layout
- Minimal, no border
- Large number as focal point
```

---

### 3. Badge / Tag

```
┌──────────────┐
│  Python 🐍   │
└──────────────┘
- Height: 24px
- Padding: 4px 10px
- Radius: 6px
- Font: 12px, 500
- Background: --color-primary-muted
- Text: --color-primary
```

**Variants**: default (muted primary), success (green), warning (amber), error (red)

---

### 4. Navigation

**Desktop (>768px)**
```
┌──────────────────────────────────────────────────────┐
│  Fahim Ahmed              Home  About  Projects ...   │
│  (logo, 20px, 700)        (nav links, 15px, 500)     │
│                           [🌙/☀️] toggle              │
└──────────────────────────────────────────────────────┘
- Height: 64px
- Sticky at top, backdrop-filter: blur(12px)
- Background: rgba(11, 18, 32, 0.8) — dark mode
- Bottom border: 1px solid --color-border
- Active link: text-primary, subtle underline or dot
```

**Mobile (<768px)**
```
┌──────────────────────────────────────┐
│  Fahim Ahmed              ☰ [🌙/☀️]  │
├──────────────────────────────────────┤
│                                      │
│  Full-screen overlay                 │
│  ┌────────────────────────────────┐  │
│  │  Home                         │  │
│  │  About                        │  │
│  │  Projects                     │  │
│  │  Articles                     │  │
│  │  Skills                       │  │
│  │  Experience                   │  │
│  │  Resume                       │  │
│  │  Contact                      │  │
│  └────────────────────────────────┘  │
│                                      │
│  Social: [GitHub] [LinkedIn] [Email] │
└──────────────────────────────────────┘
- Smooth slide-in animation, 300ms
- 48px link height for touch targets
```

---

### 5. Skill Pill

```
┌──────────────────────┐
│  🔷  Python          │  ← 10px dot + 14px label
└──────────────────────┘
- Height: 32px
- Padding: 6px 16px
- Radius: 9999px
- Background: --color-surface
- Border: 1px solid --color-border
- Hover: border-primary
- Icon/dot on left colored by domain:
  - Python: blue (#3776AB)
  - Data: green (#10B981)
  - Web: orange (#F59E0B)
  - SEO: purple (#8B5CF6)
  - AI: pink (#EC4899)
  - Tools: slate (#64748B)
```

---

### 6. Hero Section

```
┌──────────────────────────────────────────┐
│                                          │
│  ┌─────────────┐    ┌──────────┐        │
│  │ Fahim Ahmed │    │          │        │
│  │ (72px, 700) │    │  Photo   │        │
│  │             │    │  or      │        │
│  │ Python Auto │    │  avatar  │        │
│  │ SEO · OSS   │    │  (200px) │        │
│  │ (18px, 500) │    │          │        │
│  │             │    └──────────┘        │
│  │ "I build.." │                        │
│  │ (16px, 400) │                        │
│  │             │                        │
│  │ [Projects]  │                        │
│  │ [Articles]  │                        │
│  │ [Resume]    │                        │
│  │             │                        │
│  │ ● ● ●      │                        │
│  └─────────────┘                        │
│                                          │
└──────────────────────────────────────────┘
- Full viewport height on desktop (min-height: 90vh)
- Centered content, max-width: 1280px
- Photo: circular or rounded-xl, ~200px
- CTA buttons: 3 primary buttons in a row
- Social icons: small, 20px, muted hover → primary
```

---

### 7. Section Title

```
┌──────────────────────────────────────┐
│  Featured Projects                   │  ← 36px, 700, headings font
│                                      │
│  A selection of things I've built.   │  ← 16px, secondary
└──────────────────────────────────────┘
- Margin-bottom: 48px
- Optional eyebrow label above heading (12px, uppercase, tracking, primary)
```

---

### 8. Breadcrumbs

```
Home  ›  Projects  ›  metascrub
- Font: 14px, secondary
- Separator: "›" or "/" in muted color
- Last item: text color
- Middle items: hover → primary
```

---

### 9. TOC (Table of Contents) — Blog Sidebar

```
┌────────────────────┐
│ On this page       │  ← 14px, 600
│                    │
│ ● Introduction     │  ← active: primary, 13px
│ ● Installation     │  ← inactive: secondary, 13px
│ ● Usage            │
│   ● Basic          │  ← nested: 12px, indent 12px
│   ● Advanced       │
│ ● API Reference    │
│ ● Conclusion       │
└────────────────────┘
- Sticky (top: 100px)
- Width: 220px
- Only visible on lg screens (>=1024px)
- Active item: primary dot + bold
- Scroll-spy: auto-highlight current section
```

---

### 10. Timeline Item (Experience page)

```
  │
  │  2026                         ← year badge
  │
  │  ┌────────────────────────┐
  │  │ ●  Published metascrub  │  ← 8px dot on the line
  │  │    on PyPI              │
  │  │                         │
  │  │  Python, CLI, EXIF      │  ← tags
  │  │  Open-source release    │  ← category label
  │  └────────────────────────┘
  │
  │  2025
  │
  │  ┌────────────────────────┐
  │  │ ●  Built first         │
  │  │    automation project  │
  │  └────────────────────────┘
  │
- Vertical line on left (2px, --color-border)
- Dot: 12px circle, primary
- Card: same as project card but smaller
- Alternate left/right on desktop
- Single column on mobile
```

---

### 11. Form Input

```
┌──────────────────────────────────────┐
│  Label                    (optional)  │  ← 14px, 500
│  ┌────────────────────────────────┐  │
│  │  Placeholder text...           │  │  ← 16px, 400
│  └────────────────────────────────┘  │
│  (helper text or error message)      │  ← 12px
└──────────────────────────────────────┘
- Height: 48px
- Radius: 8px
- Background: --color-surface
- Border: 1.5px solid --color-border
- Focus: border-primary, ring-2 ring-primary-muted
- Error: border-error, text-error
- Disabled: opacity 50%
```

**Textarea variant**: same style, min-height 120px, resizable vertical

---

### 12. Search Overlay

```
┌─────────────────────────────────────────┐
│  🔍  Search articles, projects...       │  ← large input
│  ─────────────────────────────────────  │
│                                         │
│  Results                                │
│  ┌─────────────────────────────────┐   │
│  │  Article Title                ↕  │   │
│  │  ...excerpt with matching...      │   │
│  │  Python  ·  3 min read            │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  Project Title                ↕  │   │
│  │  ...excerpt with matching...      │   │
│  │  Python  ·  CLI  ·  2026         │   │
│  └─────────────────────────────────┘   │
│                                         │
│  No results? Try different terms.      │
└─────────────────────────────────────────┘
- Full-screen modal overlay
- Background: rgba(0,0,0,0.6) with blur
- Input: 48px, 18px, auto-focused
- Powered by Pagefind (build-time indexing)
```

---

### 13. Pagination

```
┌────────────────────────────────────────┐
│  ← Previous    1  2  3  ...  12  Next → │
└────────────────────────────────────────┘
- Centered
- Current page: primary bg, white text
- Other pages: ghost style
- Disabled prev/next: muted, no pointer
```

---

### 14. CTA Section

```
┌──────────────────────────────────────┐
│                                      │
│        Let's Work Together           │  ← 36px
│                                      │
│  I'm always open to new projects     │  ← 16px, secondary
│  and collaborations.                 │
│                                      │
│        [Get in Touch →]              │  ← primary CTA
│                                      │
└──────────────────────────────────────┘
- Centered layout
- Max-width: 640px
- Padding: 80px 0
- Subtle top/bottom border or bg variation
```

---

### 15. Footer

```
┌──────────────────────────────────────────┐
│  Fahim Ahmed                             │
│  Python Automation Engineer              │
│                                          │
│  Home · About · Projects · Articles      │  ← nav links
│  Skills · Experience · Resume · Contact  │
│                                          │
│  GitHub    LinkedIn    Email             │  ← social icons
│                                          │
│  © 2026 Fahim Ahmed. All rights reserved.│  ← 12px, muted
│  ↑ Back to top                           │
└──────────────────────────────────────────┘
- Background: --color-bg (same as page)
- Top border: 1px solid --color-border
- Padding: 48px 0 32px
- Nav links: 14px, secondary, hover → primary
- Social icons: 20px, muted, hover → primary
```

---

## Page Layout Wireframes

### Homepage

```
┌──────────────────────────────────────────────┐
│  HEADER (sticky)                             │
├──────────────────────────────────────────────┤
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │  HERO SECTION                          │  │
│  │  ┌───────┐  ┌────┐                    │  │
│  │  │ Name  │  │photo                   │  │
│  │  │ Title │  │                        │  │
│  │  │ Bio   │  └────┘                    │  │
│  │  │[BTN] [BTN] [BTN]                   │  │
│  │  │ ● ● ●                              │  │
│  │  └───────┘                             │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ── Current Focus ──                         │
│  ┌────────────────────────────────────────┐  │
│  │  Currently building fahimpyto.dev      │  │
│  │  and improving metascrub...            │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ── Featured Projects ──                     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │
│  │Card  │ │Card  │ │Card  │ │Card  │      │
│  └──────┘ └──────┘ └──────┘ └──────┘      │
│                                              │
│  ── Latest Articles ──                       │
│  ┌──────┐ ┌──────┐ ┌──────┐                │
│  │Card  │ │Card  │ │Card  │                │
│  └──────┘ └──────┘ └──────┘                │
│                                              │
│  ── Featured Skills ──                       │
│  [Python] [Data] [Web] [SEO] [AI] [Tools]   │
│                                              │
│  ── Achievements ──                          │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐          │
│  │  1  │ │  2  │ │  3  │ │  4  │          │
│  │OSS  │ │Articles│ │Projects │ │PyPI  │          │
│  └─────┘ └─────┘ └─────┘ └─────┘          │
│                                              │
│  ── Let's Work Together ──                   │
│  ┌────────────────────────────────────────┐  │
│  │  Heading + CTA Button                  │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  FOOTER                                      │
└──────────────────────────────────────────────┘
```

### Project Detail

```
┌──────────────────────────────────────────────┐
│  HEADER                                       │
├──────────────────────────────────────────────┤
│  Breadcrumbs                                  │
│                                              │
│  ████████████████████████████████████████    │
│  ███████████ HERO IMAGE █████████████████    │
│  ████████████████████████████████████████    │
│                                              │
│  metascrub                                   │  ← h1
│  Strip AI metadata from images               │  ← subtitle
│                                              │
│  [Python] [CLI] [PyPI] [MIT]                │  ← tags
│                                              │
│  ┌────────────┐  ┌────────────┐             │
│  │ GitHub Repo │  │ PyPI Page  │             │  ← buttons
│  └────────────┘  └────────────┘             │
│                                              │
│  ┌────────────────────┐ ┌────────────────┐  │
│  │ Overview           │ │ Quick Info     │  │
│  │ Problem: AI images │ │ ├ Role: Creator│  │
│  │ have hidden meta…  │ │ │ Stack: Python│  │
│  │ Solution: metascrub│ │ │ Released:2026│  │
│  │ strips it cleanly  │ │ └──────────────│  │
│  └────────────────────┘ └────────────────┘  │
│                                              │
│  ── Key Features ──                          │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │
│  │C2PA  │ │Multi │ │Organic│ │Design │      │
│  │Parse │ │Format│ │Inject │ │Inject │      │
│  └──────┘ └──────┘ └──────┘ └──────┘      │
│                                              │
│  ── Installation ──                          │
│  ┌────────────────────────────────────────┐  │
│  │  pip install metascrub                 │  │  ← code block
│  └────────────────────────────────────────┘  │
│                                              │
│  ── Usage ──                                 │
│  ┌────────────────────────────────────────┐  │
│  │  mtsb clean image.png                  │  │
│  │  mtsb clean image.png --organic        │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ── Challenges & Lessons ──                  │
│  ┌────────────────────────────────────────┐  │
│  │  Text content about challenges...      │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ── Future Improvements ──                   │
│  ┌────────────────────────────────────────┐  │
│  │  Text content here...                   │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ── Related Projects ──                      │
│  ┌──────┐ ┌──────┐                          │
│  │Card  │ │Card  │                          │
│  └──────┘ └──────┘                          │
│                                              │
│  FOOTER                                      │
└──────────────────────────────────────────────┘
```

### Blog Article

```
┌──────────────────────────────────────────────┐
│  HEADER                                       │
├──────────────────────────────────────────────┤
│  Breadcrumbs                  ┌────────────┐ │
│                               │ TOC        │ │
│  ████████████████████████████ │ - Intro    │ │
│  █████ COVER IMAGE ██████████ │ - Section 1│ │
│  ████████████████████████████ │ - Section 2│ │
│                               │ - Conclusion│ │
│  Python  ·  5 min read       │ └────────────┘ │
│  July 10, 2026                │               │
│                               │               │
│  # Article Title              │               │
│  (h1, 48px)                   │               │
│                               │               │
│  ## Introduction              │               │
│  Body text...                 │               │
│                               │               │
│  ## Installation              │               │
│  ```python                   │               │
│  pip install metascrub        │               │
│  ```                         │               │
│                               │               │
│  ## Usage Examples            │               │
│  More content with code...    │               │
│                               │               │
│  ## Conclusion                │               │
│  Final thoughts...            │               │
│                               │               │
│  ───────────────────────────  │               │
│                               │               │
│  Tags: [Python] [CLI] [PyPI] │               │
│  Share: [Twitter] [LinkedIn] │               │
│                               │               │
│  ── Related Posts ──          │               │
│  ┌──────┐ ┌──────┐ ┌──────┐  │               │
│  │Card  │ │Card  │ │Card  │  │               │
│  └──────┘ └──────┘ └──────┘  │               │
│                               │               │
│  ── Comments ──               │               │
│  ┌────────────────────────┐   │               │
│  │  Giscus widget         │   │               │
│  └────────────────────────┘   │               │
│                               │               │
│  FOOTER                       │               │
└──────────────────────────────────────────────┘
```

### About Page

```
┌──────────────────────────────────────────────┐
│  HEADER                                       │
├──────────────────────────────────────────────┤
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │  ┌──────┐    ┌───────────────────┐     │  │
│  │  │Photo │    │ Fahim Ahmed       │     │  │
│  │  │circle│    │ Python Automation  │     │  │
│  │  │or    │    │ Engineer           │     │  │
│  │  │round │    │                    │     │  │
│  │  │200px │    │ Brief tagline      │     │  │
│  │  └──────┘    └───────────────────┘     │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ── My Story ──                              │
│  ┌────────────────────────────────────────┐  │
│  │  Paragraphs about:                      │  │
│  │  - How I started programming           │  │
│  │  - Why automation interests me          │  │
│  │  - Why SEO matters to me               │  │
│  │  - Why I publish open source            │  │
│  │  - What I'm learning now               │  │
│  │  - Future goals                         │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ── Quick Facts ──                           │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐          │
│  │  1  │ │  2  │ │  3  │ │  4  │          │
│  │PyPI │ │Years│ │OSS  │ │Posts│          │
│  │Pkg  │ │Coding│ │Projs│ │     │          │
│  └─────┘ └─────┘ └─────┘ └─────┘          │
│                                              │
│  ── Let's Connect ──                         │
│  Social links + CTA                           │
│                                              │
│  FOOTER                                      │
└──────────────────────────────────────────────┘
```

---

## Responsive Breakpoints

| Breakpoint | Width | Key Layout Changes |
|-----------|-------|--------------------|
| `sm` | 640px | Cards → full width, nav → hamburger |
| `md` | 768px | 2-column grids |
| `lg` | 1024px | 3-column grids, TOC sidebar visible, max-width container |
| `xl` | 1280px | Hero side-by-side layout |
| `2xl` | 1536px | Reserved for ultra-wide |

### Container Max-Widths

| Context | Max-Width |
|---------|-----------|
| Page content | 1280px |
| Article body | 720px |
| Article + TOC | 720px + 220px = 980px |
| Hero content | 1280px |

---

## Animation Guidelines

| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Cards | Hover | translateY(-4px), shadow increase | 300ms | ease-out |
| Buttons | Hover | translateY(-1px), bg darken | 200ms | ease-out |
| Buttons | Active | scale(0.98) | 100ms | ease-in |
| Links | Hover | underline or color transition | 200ms | ease-out |
| Nav items | Hover | color transition | 200ms | ease-out |
| Theme toggle | Click | icon rotation, bg transition on body | 300ms | ease-out |
| Scroll reveal | Intersection | opacity 0→1, translateY(20px→0) | 600ms | ease-out |
| Mobile nav | Open/close | slide from right, opacity fade | 300ms | ease-in-out |
| Page navigation | Click | instant (static site, no JS routing) | — | — |

### Scroll Reveal Stagger

When multiple items enter viewport together (e.g., project cards):

```
delay: 0ms  100ms  200ms  300ms
[Card]  [Card]  [Card]  [Card]
```

---

## Image Guidelines

| Context | Aspect Ratio | Max Width | Format |
|---------|-------------|-----------|--------|
| Project card cover | 16:9 | 600px | WebP/AVIF |
| Blog card cover | 16:9 | 600px | WebP/AVIF |
| Project detail hero | 16:9 | 1280px | WebP/AVIF |
| Blog article cover | 16:9 | 1280px | WebP/AVIF |
| About photo | 1:1 (square) | 400px | WebP |
| Skill icon | 1:1 | 24px | SVG |
| Screenshot gallery | flexible | 800px | WebP |

All images use Astro's `<Image />` component for automatic optimization, responsive srcsets, and lazy loading.

---

## Accessibility Requirements

- All interactive elements must be keyboard accessible
- Focus indicators: `outline: 2px solid --color-primary` with `outline-offset: 2px`
- Color contrast ratios meet WCAG AA (4.5:1 for text, 3:1 for large text)
- All images have descriptive `alt` text
- Semantic HTML structure (nav, main, section, article, aside, footer)
- Skip-to-content link
- ARIA labels on icon-only buttons
- Form inputs have associated `<label>` elements
- Theme toggle announces state changes

---

## File & Component Naming

| Convention | Example |
|------------|---------|
| Astro components | `PascalCase` | `Hero.astro`, `ProjectCard.astro` |
| Layouts | `PascalCase` | `BaseLayout.astro` |
| Page routes | `kebab-case` | `about.astro`, `[...slug].astro` |
| Data files | `kebab-case` | `navigation.yaml`, `skills.yaml` |
| Global CSS | `kebab-case` | `global.css` |
| Content entries | `kebab-case` | `metascrub.mdx`, `getting-started.mdx` |

---

## Design Tokens File (for Figma)

The following tokens should be created as Figma local variables or styles:

1. **Color** — 14 dark mode + 14 light mode = 28 color variables
2. **Typography** — 10 text styles (display → caption, each with family/size/weight/line-height)
3. **Spacing** — 14 spacing variables (4px → 160px)
4. **Radius** — 5 radius variables (4px → full)
5. **Shadow** — 4 shadow variables per theme = 8 total
6. **Breakpoints** — 5 breakpoint variables (sm → 2xl)

---

*Use this specification as your Figma/Penpot reference. Design the 4 key pages (Home, Project Detail, Blog Article, About) first to establish the visual language, then extend to remaining pages using the same component system.*

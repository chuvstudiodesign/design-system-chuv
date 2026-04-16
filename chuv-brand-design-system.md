# Chuv Studio — Brand Design System
> Extracted from Figma file: **Identidade Chuv** (`MtnwMcIBWw2pcXnjTbEZAo`)
> Date: 2026-04-14

---

## 1. Color Palette

All colors are registered as design tokens under the `www.chuv.studio/` namespace.

| Token Name              | Alias            | Hex Value   | Usage                          |
|-------------------------|------------------|-------------|--------------------------------|
| `Black`                 | `color/black/solid` | `#000000` | Primary text, logo             |
| `White`                 | `color/white/solid` | `#FFFFFF` | Page background, surfaces      |
| `White 50%`             | `color/white/ 50%`  | `#FFFFFF80` | Overlay / glassmorphism        |
| `Gallery`               | `color/grey/94`  | `#EFEFEF`   | Section backgrounds, card fill |
| `Cod Gray`              | `color/grey/7`   | `#111111`   | Near-black, subtle text        |
| `Emperor`               | `color/grey/33`  | `#545454`   | Secondary text                 |
| `Scorpion`              | `color/grey/35`  | `#595959`   | Subheadings, captions          |
| `Hurricane`             | `color/grey/54`  | `#908583`   | Muted / placeholder text       |
| `Dusty Gray`            | `color/grey/60`  | `#999999`   | Disabled states                |
| `Tolopea`               | `color/violet/12`| `#1B003D`   | Accent / brand violet          |

### Color Usage Notes
- The palette is **predominantly monochromatic** (black + white + grays).
- `Tolopea (#1B003D)` is the sole chromatic accent — used sparingly for highlights and interactive states (visible as violet in text accents and the 3D hero asset).
- Section backgrounds alternate between `#FFFFFF` (White) and `#EFEFEF` (Gallery).
- Blur overlay buttons use `White 50%` for a frosted-glass effect.

---

## 2. Typography

### Primary Typeface
| Property     | Value                   |
|--------------|-------------------------|
| Family       | **Neue Haas Unica Pro** |
| Alias        | `font family/Font 1` (mapped as `Arial` in Figma variable fallback) |
| Style        | Regular                 |
| Usage        | All headings, body text, labels, links, inputs |

### Secondary Typeface
| Property     | Value    |
|--------------|----------|
| Family       | **Inter** |
| Alias        | `font family/Font 2` |
| Style        | Regular  |
| Usage        | Buttons (CTA labels only) |

### Type Scale

| Token                   | Family          | Size   | Line Height | Letter Spacing | Weight | Usage              |
|-------------------------|-----------------|--------|-------------|----------------|--------|--------------------|
| `Semantic/Heading 1`    | Neue Haas Unica | 63px   | 75.6px      | 0              | 400    | Hero / page titles |
| `Semantic/Heading 2`    | Neue Haas Unica | 37px   | 44.4px      | 0              | 400    | Section titles     |
| `Semantic/Heading 2` sm | Neue Haas Unica | 20px   | 24px        | 0              | 400    | Sub-labels, captions (e.g. "Design by Italy") |
| `Semantic/Link`         | Neue Haas Unica | 15px   | 30px        | -0.2           | 400    | Nav links, footer links |
| `Arial/Regular`         | Neue Haas Unica | 15px   | 15px        | -0.15          | 400    | Body copy          |
| `Semantic/Input`        | Neue Haas Unica | 16px   | 100% (16px) | 0              | 400    | Form inputs        |
| `Semantic/Label`        | Neue Haas Unica | 16px   | 16px        | 0              | 400    | Form labels        |
| `Semantic/Options`      | Neue Haas Unica | 16px   | 16px        | 0              | 400    | Dropdown options   |
| `Semantic/Button`       | Inter           | 16px   | 26px        | 0              | 400    | Button labels (CTA)|

### Typography Notes
- All weights are **400 Regular** — the brand does not use bold or italic.
- Letter spacing is negative (`-0.15` to `-0.2`) for links and body, contributing to a tight, editorial feel.
- The display size in the Typography artboard is ~53px / 64px line-height, showcasing Neue Haas Unica's proportions.

---

## 3. Logo Specifications

### Mark
- **Name:** CHUV Studio
- **Format:** SVG (vector)
- **Symbol:** Rain cloud with drizzle (☁️ + rain) — used as the favicon/symbol
- **Wordmark:** "Studio" follows the cloud symbol in the compact lockup

### Sizes in Use
| Context               | Width       | Height      |
|-----------------------|-------------|-------------|
| Navigation (small)    | 124px       | 35px        |
| Hero / Visual System  | 302px       | 85px        |

### Color Variants
- **On light** (`#EFEFEF` / `#FFFFFF`): Black logo (`#000000`)
- The design file shows only the black version; white variant implied for dark backgrounds.

### Clearspace
- Top/Left margin in navigation: `30px` from container edge.
- Logo container uses `flex + justify-center` alignment.

---

## 4. Icon Style

- Icons are **minimal, flat, monochromatic** line/fill icons.
- Navigation arrows (carousel) use simple `→` and `←` directional glyphs (~10×22px).
- Service list uses `→` arrow prefix icons at `23×22px`.
- Dropdown selectors use a `16×16px` chevron icon.
- All icons are black on light backgrounds.
- No icon set/library is explicitly referenced — icons appear to be custom SVG/image assets.

---

## 5. Spacing System

Spacing is tokenized under `item-spacing/` variables.

| Token              | Value  | Usage                          |
|--------------------|--------|--------------------------------|
| `item-spacing/-1`  | -1px   | Overlapping text stack (Heading 1 rows) |
| `item-spacing/10`  | 10px   | Tight element gaps             |
| `item-spacing/14`  | 14px   | Small internal padding         |
| `item-spacing/20`  | 20px   | Component internal gap         |
| `item-spacing/s+`  | 24px   | Standard section element gap   |
| `item-spacing/40`  | 40px   | Large component separation     |

### Section Padding
- Sections use `84–85px` top padding from their container edge.
- Container horizontal padding: `85px` on each side within the 1372px content column.
- Hero section: `30px` inset for logo placement.

---

## 6. Grid Structure

| Property           | Value   |
|--------------------|---------|
| Max container width | `1400px` |
| Content column     | `1372px` (inside 1400px frame, 14px padding each side) |
| Layout type        | Single-column full-width sections with internal content grids |
| Section padding    | 85px horizontal, 84px vertical |

### Layout Zones
- **Navigation bar:** Full 1400px, logo left (`30px`), nav links right-aligned at `930px` offset.
- **Hero content:** Centered, content floats in 385px wide block at ~36% from left.
- **Services section:** Two-column split — list left (220px), media right (655px wide).
- **Benefits carousel:** Horizontal scroll of `531×531px` cards.
- **Contact form:** Centered, 512px wide, offset 573px from left.
- **Footer:** 960px inner content, centered within 1372px, with 206px left margin.

---

## 7. Component Patterns

### Navigation Bar
```
[Logo] ────────────────── [Home] [Serviços] [Projetos] [Benefícios] [Sobre] [Contato]
```
- Logo: top-left at `30px` inset
- Links: right-aligned, `30px` height, `15px` font / `30px` line-height
- Inter-link gap: 20–40px

### Section Header Pattern
```
[Section Title (37px/Heading 2)]    [Subtitle paragraph (20–25px)]
──────────────────────────────────────────────────────────────────
[Section Content]
```
- Title: left-aligned at `85px` from left
- Descriptor: right column starting at ~526px

### Service List Item
```
→ [Service Name (25px, 30px line-height)]
```
- 23px arrow icon + 10px gap + text
- Vertical spacing: 44px between items (88px → 132px stacking)

### Carousel Navigation Buttons
- Circle buttons: `50×50px`
- Background: `OverlayBlur` rounded rectangle (frosted/semi-transparent)
- Arrow icon: `10×22px`, centered
- Pair: Left (←) at x=1166, Right (→) at x=1234, `y=771`

### Contact Form
```
[Nome*]          [Email*]
[Serviço ▼]      [WhatsApp*]

[Sobre o seu projeto]
[                          ]
[                          ]
[                          ]

[        ENVIAR            ]
```
- Input height: `40px`
- Two-column grid: `244px` each, `24px` gap (268 - 244 = 24px)
- Textarea height: `150px`
- Submit button: `512px × 50px`, full-width
- Border style: thin `HorizontalBorder` rounded rectangle stroke

### Footer
```
[Logo]  [spacer]  [Navegação]  [Studios]           [Contato]
                  Home         England - London     +55 (31) 992423560
                  Serviços     Italy - Naples       +39 320 414 6531
                  Projetos     Brasil - BH          @chuv.studio
                                                   id@chuv.studio
```
- Inner content: 960px width, centered
- Font: 15px / 15px line-height, `#595959` (Scorpion)
- Three-column layout with logo + spacer prefix

---

## 8. Design Tokens (CSS Custom Properties)

```css
:root {
  /* ── Colors ── */
  --color-black:          #000000;
  --color-white:          #FFFFFF;
  --color-white-50:       #FFFFFF80;
  --color-gallery:        #EFEFEF;
  --color-cod-gray:       #111111;
  --color-emperor:        #545454;
  --color-scorpion:       #595959;
  --color-hurricane:      #908583;
  --color-dusty-gray:     #999999;
  --color-tolopea:        #1B003D;

  /* ── Typography ── */
  --font-primary:         'Neue Haas Unica Pro', Arial, sans-serif;
  --font-secondary:       'Inter', sans-serif;

  --font-size-h1:         63px;
  --font-size-h2:         37px;
  --font-size-h2-sm:      20px;
  --font-size-body:       15px;
  --font-size-ui:         16px;

  --line-height-h1:       75.6px;
  --line-height-h2:       44.4px;
  --line-height-h2-sm:    24px;
  --line-height-body:     30px;
  --line-height-button:   26px;

  --letter-spacing-body:  -0.15px;
  --letter-spacing-link:  -0.2px;

  --font-weight-regular:  400;

  /* ── Spacing ── */
  --spacing-neg1:  -1px;
  --spacing-10:    10px;
  --spacing-14:    14px;
  --spacing-20:    20px;
  --spacing-24:    24px;
  --spacing-40:    40px;
  --spacing-85:    85px;   /* section horizontal padding */
  --spacing-84:    84px;   /* section vertical padding */

  /* ── Layout ── */
  --container-max:   1400px;
  --content-width:   1372px;
  --container-pad:   14px;

  /* ── Stroke ── */
  --stroke-thin:     0.064px;
  --stroke-default:  1px;
  --stroke-medium:   1.5px;

  /* ── Dimensions ── */
  --hero-height:     875px;
  --card-size:       531px;
  --form-width:      512px;
  --input-height:    40px;
  --button-height:   50px;
}
```

---

## 9. Visual Style & Brand Character

| Attribute       | Description |
|-----------------|-------------|
| **Aesthetic**   | Minimal, editorial, Swiss-inspired |
| **Tone**        | Premium, confident, restrained |
| **Texture**     | Clean flat surfaces with one 3D/organic element (violet translucent blob) |
| **Motion hint** | Spline 3D viewer embedded in hero area; video background in services section |
| **Geometry**    | Rounded corners on cards (`border-radius: 10px`); forms use thin bottom-border inputs |
| **Accent**      | The violet 3D blob (`Tolopea #1B003D` family) is the only decorative/chromatic element |
| **Language**    | Portuguese (BR) primary, with international studio presence (IT, UK, BR) |

---

## 10. Brand Copy Anchors

| Section    | Headline / Copy |
|------------|-----------------|
| Hero       | "Comunicação Visual" |
| Services   | "Quando estratégia e design atuam juntos, algo poderoso acontece." |
| Services   | "É por isso que somos multidisciplinares, oferecendo estratégias sólidas e experiências surreais." |
| CTA        | "Toda grande ideia começa com uma conversa." |
| Tagline    | "Design by Italy" |

---

## 11. Navigation Structure

```
Home → Serviços → Projetos → Benefícios → Sobre → Contato
```

### Services Listed
1. Direção Visual
2. Identidade Visual
3. Design de Fonte
4. Motion e Design 3D
5. Edição com FVX
6. Web Design
7. Apps Interface UI

### Studio Locations
- Brasil: Minas Gerais — Belo Horizonte
- Italy: Campania — Naples
- United Kingdom: England — London

---

*System extracted via Figma Desktop MCP on 2026-04-14.*



## Plan: Improve About Section Centering and Hero Profile Quote Box

### Changes

**1. About Section (`src/components/AboutSection.tsx`)**
- Center the entire grid content by adding `mx-auto` and ensuring the max-width constraint centers properly
- Add `items-center` or `items-stretch` to the grid for vertical alignment

**2. Hero Section Profile Quote Box (`src/components/HeroSection.tsx`)**
- Widen the Proverbs 21:5 dialogue box — increase `max-w-[220px]` to `max-w-[280px]` and `md:max-w-[260px]` to `md:max-w-[320px]`
- Add more padding (`p-4 md:p-5`) so the text breathes and doesn't feel like a cramped paragraph
- Increase line-height/spacing between the two lines of the quote

### Files to edit
- `src/components/AboutSection.tsx` — center grid content
- `src/components/HeroSection.tsx` — expand quote box dimensions and spacing


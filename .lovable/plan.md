

## Plan: Dark/Light Mode Toggle, Contact 60/40 Layout, and Profile Box Fix

### 1. Dark/Light Mode Toggle (Navbar)
- Add a `Sun`/`Moon` icon toggle button in the navbar (between nav links and "Contact Me" button)
- Use `next-themes` (already installed) `ThemeProvider` wrapping the app in `App.tsx`
- Add light mode CSS variables in `index.css` under a `.light` or `:root` class (white backgrounds, dark text, adjusted primary colors)
- Add `<html class="dark">` default via ThemeProvider `defaultTheme="dark"`

**Files:** `src/App.tsx`, `src/components/Navbar.tsx`, `src/index.css`

### 2. Contact Section 60/40 Layout
- Change grid from `lg:grid-cols-[1.2fr_1fr]` to `lg:grid-cols-[1.5fr_1fr]` (same as About section)
- Add `mx-auto` for centering

**File:** `src/components/ContactSection.tsx` (line 37)

### 3. Profile Dialogue Box — Wider, Shorter
- The Proverbs quote box at `bottom-6` pushes into the profile image area. Fix:
  - Make the container wider: `w-80 h-80 md:w-[480px] md:h-[380px]` (wider, less tall)
  - Adjust quote box position: move it further down/right so it doesn't overlap the profile circle
  - Reduce quote box padding slightly to keep it compact

**File:** `src/components/HeroSection.tsx` (line 84 container dimensions, line 102-103 box positioning)

### Files to Edit
1. `src/index.css` — add light theme variables
2. `src/App.tsx` — wrap with ThemeProvider
3. `src/components/Navbar.tsx` — add theme toggle button
4. `src/components/ContactSection.tsx` — 60/40 grid
5. `src/components/HeroSection.tsx` — profile container dimensions


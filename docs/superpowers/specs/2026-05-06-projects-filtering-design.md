# Projects Filtering — Design Spec

## Overview

Add type + tag filtering to the Projects section. A `FilterBar` component sits above the project grid; `Projects.tsx` owns the filter state and passes it down. Filtered cards are removed from the DOM; the grid reflows with a CSS transition.

## Architecture

```
Projects.tsx (client component)
├── FilterBar.tsx          — filter UI, receives state + setters via props
└── project cards grid     — renders only filtered PROJECTS
```

**State in Projects.tsx:**
- `activeType: string` — default `"All"`, single-select among `All | Fullstack | Front-End | Mobile`
- `activeTags: string[]` — default `[]`, multi-select toggled set of tag strings

**Derived data (computed once, outside component):**
- `ALL_TYPES` — `["All", "Fullstack", "Front-End", "Mobile"]`
- `ALL_TAGS` — unique tags from `PROJECTS`, sorted alphabetically

## FilterBar Component

**Props:**
```ts
interface FilterBarProps {
  activeType: string;
  activeTags: string[];
  availableTags: string[];   // tags present in currently type-filtered projects
  onTypeChange: (type: string) => void;
  onTagToggle: (tag: string) => void;
  onClear: () => void;
}
```

**Layout:**
1. Row 1 — type pills: `All · Fullstack · Front-End · Mobile`
   - Single-select; active pill gets accent background + black text
2. Row 2 — tag chips derived from `availableTags` (tags that exist in at least one project matching the active type)
   - Multi-select toggle; active chip gets accent border + accent text
   - Sorted alphabetically, wraps on overflow
3. "Clear" button — appears only when `activeType !== "All" || activeTags.length > 0`

## Filter Logic

Applied in `Projects.tsx` before rendering:

```
filtered = PROJECTS
  .filter(p => activeType === "All" || p.type === activeType)
  .filter(p => activeTags.every(tag => p.tags.includes(tag)))
```

Type and tags are combined with AND. `availableTags` is derived from the type-filtered list (before tag filter) so chips update as type changes. When type changes, `activeTags` is cleared to avoid impossible combinations.

## Animation

- Cards that appear: CSS `fadeIn` keyframe (`opacity 0→1, translateY 12px→0`, duration 0.4s, easing `cubic-bezier(0.22, 1, 0.36, 1)`)
- Cards that disappear: removed from DOM instantly (grid reflows)
- Grid layout transition: `transition: gap 0.3s` is already present; no additional work needed
- Each card gets `animation-delay` staggered by index × 60ms (capped at 5 cards to avoid long waits)

## Files Touched

| File | Change |
|------|--------|
| `src/components/Projects.tsx` | Add `"use client"`, `useState`, filter logic, render `FilterBar` |
| `src/components/FilterBar.tsx` | New component |
| `src/components/FilterBar.module.css` | New styles |
| `src/components/Projects.module.css` | Add `fadeIn` keyframe + card animation |

## Out of Scope

- URL persistence of filter state
- Animated card exit (fade-out before removal)
- "No results" empty state illustration

# Projects Filtering Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add type-pill + tag-chip filtering to the Projects section, with AND logic and animated card enter.

**Architecture:** `Projects.tsx` becomes a client component owning `activeType` and `activeTags` state. `FilterBar.tsx` is a new presentational component receiving state and setters via props. Filtered list is computed with `useMemo` before render; cards removed from DOM reflow the grid naturally.

**Tech Stack:** Next.js 14, React 18, TypeScript, CSS Modules

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `src/components/Projects.module.css` | Modify | Add `fadeIn` keyframe + `animation` to `.card` |
| `src/components/FilterBar.module.css` | Create | Styles for type pills, tag chips, clear button |
| `src/components/FilterBar.tsx` | Create | Filter UI — type pills row + tag chips row |
| `src/components/Projects.tsx` | Modify | Add `"use client"`, state, filter logic, render `FilterBar` |

---

### Task 1: Add fadeIn animation to Projects.module.css

**Files:**
- Modify: `src/components/Projects.module.css`

- [ ] **Step 1: Remove `margin-top` from `.grid`**

The FilterBar provides its own `margin-top` and `margin-bottom`, so the grid no longer needs top spacing. In `src/components/Projects.module.css`, change:

```css
/* before */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 4rem;
}

/* after */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
```

- [ ] **Step 2: Add `@keyframes fadeIn` and wire it to `.card`**

Open `src/components/Projects.module.css`. Add the keyframe at the bottom of the file and add `animation` to the existing `.card` rule:

```css
/* add to .card rule — append these two lines to the existing properties */
.card {
  border: 1px solid var(--border);
  border-radius: 2px;
  overflow: hidden;
  background: var(--surface);
  transition: border-color 0.3s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  animation: fadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* add at end of file */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Projects.module.css
git commit -m "feat: add fadeIn animation to project cards"
```

---

### Task 2: Create FilterBar.module.css

**Files:**
- Create: `src/components/FilterBar.module.css`

- [ ] **Step 1: Write the stylesheet**

Create `src/components/FilterBar.module.css` with this exact content:

```css
.bar {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.types {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.pill {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--muted);
  background: transparent;
  cursor: none;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.pill:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.pillActive {
  background: var(--accent);
  border-color: var(--accent);
  color: #000;
  font-weight: 700;
}

.pillActive:hover {
  color: #000;
}

.clear {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--muted);
  background: transparent;
  border: none;
  cursor: none;
  padding: 0.4rem 0.5rem;
  transition: color 0.2s;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.clear:hover {
  color: var(--text);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  font-family: var(--mono);
  font-size: 0.62rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--muted);
  background: var(--surface);
  cursor: none;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.chip:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.chipActive {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FilterBar.module.css
git commit -m "feat: add FilterBar stylesheet"
```

---

### Task 3: Create FilterBar.tsx

**Files:**
- Create: `src/components/FilterBar.tsx`

- [ ] **Step 1: Write the component**

Create `src/components/FilterBar.tsx`:

```tsx
"use client";

import styles from "./FilterBar.module.css";

const ALL_TYPES = ["All", "Fullstack", "Front-End", "Mobile"] as const;

interface FilterBarProps {
  activeType: string;
  activeTags: string[];
  availableTags: string[];
  onTypeChange: (type: string) => void;
  onTagToggle: (tag: string) => void;
  onClear: () => void;
}

export function FilterBar({
  activeType,
  activeTags,
  availableTags,
  onTypeChange,
  onTagToggle,
  onClear,
}: FilterBarProps) {
  const hasActiveFilter = activeType !== "All" || activeTags.length > 0;

  return (
    <div className={styles.bar}>
      <div className={styles.types}>
        {ALL_TYPES.map((type) => (
          <button
            key={type}
            className={`${styles.pill} ${activeType === type ? styles.pillActive : ""}`}
            onClick={() => onTypeChange(type)}
          >
            {type}
          </button>
        ))}
        {hasActiveFilter && (
          <button className={styles.clear} onClick={onClear}>
            Clear
          </button>
        )}
      </div>

      {availableTags.length > 0 && (
        <div className={styles.tags}>
          {availableTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.chip} ${activeTags.includes(tag) ? styles.chipActive : ""}`}
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/FilterBar.tsx
git commit -m "feat: add FilterBar component"
```

---

### Task 4: Rewrite Projects.tsx with filter state

**Files:**
- Modify: `src/components/Projects.tsx`

- [ ] **Step 1: Replace the file content**

Replace the entire content of `src/components/Projects.tsx`:

```tsx
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { PROJECTS } from "@/config/data";
import { FilterBar } from "./FilterBar";
import styles from "./Projects.module.css";

export function Projects() {
  const [activeType, setActiveType] = useState("All");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  function handleTypeChange(type: string) {
    setActiveType(type);
    setActiveTags([]);
  }

  function handleTagToggle(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function handleClear() {
    setActiveType("All");
    setActiveTags([]);
  }

  const typeFiltered = useMemo(
    () =>
      activeType === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.type === activeType),
    [activeType]
  );

  const availableTags = useMemo(
    () => Array.from(new Set(typeFiltered.flatMap((p) => p.tags))).sort(),
    [typeFiltered]
  );

  const filtered = useMemo(
    () =>
      typeFiltered.filter((p) =>
        activeTags.every((tag) => p.tags.includes(tag))
      ),
    [typeFiltered, activeTags]
  );

  return (
    <section id="projects">
      <div className="section-label reveal">03 — Work</div>
      <h2 className="section-title reveal reveal-delay-1">Selected Projects</h2>

      <FilterBar
        activeType={activeType}
        activeTags={activeTags}
        availableTags={availableTags}
        onTypeChange={handleTypeChange}
        onTagToggle={handleTagToggle}
        onClear={handleClear}
      />

      <div className={styles.grid}>
        {filtered.map((p, i) => (
          <div
            key={p.title}
            className={styles.card}
            style={{ animationDelay: `${Math.min(i, 4) * 60}ms` }}
          >
            <div className={styles.imgWrap}>
              <Image
                src={p.img}
                alt={p.title}
                fill
                className={styles.img}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlay}>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.overlayBtn}
                  >
                    ↗ Live
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.overlayBtn} ${styles.ghost}`}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.type}>{p.type}</div>
              <h3 className={styles.name}>{p.title}</h3>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: compiled successfully with no type errors

- [ ] **Step 4: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: add type and tag filtering to Projects section"
```

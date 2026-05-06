"use client";

import { useState, useMemo } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
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

  const [gridRef] = useAutoAnimate();

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

      <div className={styles.grid} ref={gridRef}>
        {filtered.map((p, i) => (
          <div
            key={p.title}
            className={styles.card}
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

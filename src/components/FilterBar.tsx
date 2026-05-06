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
              className={`${styles.pill} ${activeTags.includes(tag) ? styles.pillActive : ""}`}
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

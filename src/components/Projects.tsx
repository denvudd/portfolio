import Image from "next/image";
import { PROJECTS } from "@/config/data";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects">
      <div className="section-label reveal">03 — Work</div>
      <h2 className="section-title reveal reveal-delay-1">Selected Projects</h2>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <div
            key={p.title}
            className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}
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
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { SKILLS_MAIN, SKILLS_SECONDARY } from "@/config/data";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills">
      <div className="section-label reveal">02 — Skills</div>
      <h2 className="section-title reveal reveal-delay-1">Tech Stack</h2>

      <div className={styles.grid}>
        <div className="reveal reveal-delay-2">
          <p className={styles.groupLabel}>// Primary stack</p>
          <div className="skill-tags">
            {SKILLS_MAIN.map((s, i) => (
              <span key={s} className={`skill-tag reveal reveal-delay-${(i % 4) + 1}`}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-3">
          <p className={styles.groupLabel}>// Secondary stack</p>
          <div className="skill-tags">
            {SKILLS_SECONDARY.map((s, i) => (
              <span key={s} className={`skill-tag reveal reveal-delay-${(i % 4) + 1}`}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

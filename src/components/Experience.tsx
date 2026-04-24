import { EXPERIENCE } from "@/config/data";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience">
      <div className="section-label reveal">04 — Career</div>
      <h2 className="section-title reveal reveal-delay-1">Experience</h2>

      <div className={styles.timeline}>
        {EXPERIENCE.map((e, i) => (
          <div key={i} className={`${styles.item} reveal reveal-delay-${i + 1}`}>
            <div className={styles.period}>{e.period}</div>
            <h3 className={styles.role}>{e.role}</h3>
            <div className={styles.company}>{e.company}</div>
            <p className={styles.desc}>{e.desc}</p>
            <div className="skill-tags" style={{ marginTop: "0.75rem" }}>
              {e.stack.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

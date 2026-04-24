import styles from "./About.module.css";

const STATS = [
  { num: "2+", label: "Years of experience" },
  { num: "10+", label: "Projects shipped" },
  { num: "5+", label: "Enterprise clients" },
  { num: "∞",  label: "Cups of coffee" },
];

export function About() {
  return (
    <section id="about">
      <div className="section-label reveal">01 — About</div>
      <h2 className="section-title reveal reveal-delay-1">Who I Am</h2>

      <div className={styles.grid}>
        <div className={`${styles.text} reveal reveal-delay-2`}>
          <p>
            I&apos;m a <strong>Front-End Engineer</strong> with over{" "}
            <strong>2 years of experience</strong> building scalable, modern
            web applications — from robust UI components to
            performance-conscious architectures.
          </p>
          <p>
            My focus is on <strong>maintainable code, clean abstractions</strong>,
            and delivering real product value. I bridge implementation and
            product thinking, ensuring frontend work aligns with business goals
            and long-term sustainability.
          </p>
          <p>
            I&apos;ve shipped production code for clients in the{" "}
            <strong>UK, Germany, and Ukraine</strong> — from CRM systems and
            SaaS platforms to fully custom booking engines and real-time
            collaboration tools.
          </p>
        </div>

        <div className={`${styles.stats} reveal reveal-delay-3`}>
          {STATS.map((s) => (
            <div key={s.num} className={styles.statCard}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

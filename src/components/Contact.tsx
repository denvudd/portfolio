import { SOCIALS } from "@/config/data";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact">
      <div className="section-label reveal">05 — Contact</div>

      <div className={styles.inner}>
        <h2 className={`${styles.big} reveal reveal-delay-1`}>
          Let&apos;s build<br />
          <span>something</span> great
        </h2>
        <p className={`${styles.sub} reveal reveal-delay-2`}>
          Have a project in mind? Want to discuss an opportunity? Or just say
          hi? I&apos;m always open to a conversation.
        </p>
        <div className={`${styles.links} reveal reveal-delay-3`}>
          <a
            href="mailto:dmitry.yurin2020@gmail.com"
            className={`btn-primary ${styles.emailBtn}`}
          >
            ✉ dmitry.yurin2020@gmail.com
          </a>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label={s.label}
            >
              {s.abbr}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

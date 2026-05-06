"use client";

import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ScrambleText } from "./ScrambleText";
import styles from "./Hero.module.css";

function HireMeBtn() {
  const ref = useMagnetic();
  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href="#projects"
      className={`btn-primary ${styles.ctaBtn}`}
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      View Work
      <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M2 7h10M8 3l4 4-4 4" />
      </svg>
    </a>
  );
}

function ContactBtn() {
  const ref = useMagnetic();
  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href="mailto:dmitry.yurin2020@gmail.com"
      className="btn-outline"
    >
      Get in Touch
    </a>
  );
}

export function Hero() {
  useScrollReveal();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        Available for work
      </div>

      <div className={styles.name}>
        <span className={styles.nameLine}>
          <span className={styles.nameInner}>
            <span className="glitch-wrap" data-text="DMYTRO">
              DMYTRO
            </span>
          </span>
        </span>
        <span className={styles.nameLine}>
          <span className={styles.nameInner}>
            <span
              className="glitch-wrap"
              data-text="YURIN"
              style={{ color: "var(--accent)" }}
            >
              YURIN
            </span>
          </span>
        </span>
      </div>

      <div className={styles.footer}>
        <div className={styles.desc}>
          <p className={styles.role}>
            // <ScrambleText text="Fullstack Engineer" active={true} />
          </p>
          <p className={styles.bio}>
            Building scalable, modern applications — from robust UI components
            to performance-conscious architectures.
          </p>
        </div>

        <div className={styles.cta}>
          <HireMeBtn />
          <ContactBtn />
        </div>

        <div
          className={styles.scroll}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </section>
  );
}

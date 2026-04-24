"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import styles from "./Navbar.module.css";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo}>denvudd</div>

        <nav className={styles.links}>
          {NAV_LINKS.map((l) => (
            <button key={l} className={styles.link} onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
          <button className={styles.themeBtn} onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <a href="mailto:dmitry.yurin2020@gmail.com" className="btn-primary" style={{ padding: "0.45rem 1rem", fontSize: "0.78rem" }}>
            Hire me
          </a>
        </nav>

        <button
          className={styles.mobileToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M2 2l14 14M16 2L2 16" />
            </svg>
          ) : (
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M2 4h14M2 9h14M2 14h14" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile menu */}
      <div className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        {NAV_LINKS.map((l, i) => (
          <button
            key={l}
            className={styles.mobileLink}
            onClick={() => scrollTo(l)}
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            0{i + 1} — {l}
          </button>
        ))}
        <a href="mailto:dmitry.yurin2020@gmail.com" className="btn-primary" style={{ marginTop: "1.5rem", width: "fit-content" }}>
          Hire me
        </a>
      </div>
    </>
  );
}

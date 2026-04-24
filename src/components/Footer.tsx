import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Dmytro Yurin</span>
      <span className={styles.right}>Built with passion & ☕</span>
    </footer>
  );
}

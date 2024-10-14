import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2024 Pranava Institute of Yoga and Wellness. All rights reserved.</p>
      </div>
    </footer>
  );
}


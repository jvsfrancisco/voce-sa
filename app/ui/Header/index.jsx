import Link from 'next/link';

export default function Header({ styles }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="#" className={styles.navItem}>jvsfrancisco</Link>
        <Link href="/" className={`${styles.navItem} ${styles.activeNav}`}>_hello</Link>
        <Link href="/bio/familia" className={styles.navItem}>_sobre-mim</Link>
        <Link href="#" className={styles.navItem}>_contate-me</Link>
      </nav>
    </header>
  )
}
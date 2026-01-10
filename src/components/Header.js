
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoImageWrapper}>
              <Image 
                src="/spot-it-logo.png" 
                alt="SPOT IT Logo" 
                width={150} 
                height={50} 
                className={styles.logoImage}
                priority
              />
            </div>
          </Link>
        </div>
        
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#how-it-works" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            </li>
          </ul>
          
          <Link href="#download" className={styles.downloadBtn} onClick={() => setIsMenuOpen(false)}>
            Download App
          </Link>
        </nav>
      </div>
    </header>
  );
}

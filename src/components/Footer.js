
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <Image 
                src="/spot-it-logo.png" 
                alt="SPOT IT Logo" 
                width={150} 
                height={50} 
                className={styles.footerLogoImage}
              />
            </div>
            <p className={styles.description}>
              A government initiative to empower citizens and ensure a cleaner, healthier India for future generations.
            </p>
          </div>
          

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#how-it-works">How It Works</Link></li>
              <li><Link href="#download">Download App</Link></li>
            </ul>
          </div>
          
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Help & Support</h4>
            <p>Helpline: <strong>1969</strong></p>
            <p>Email: <strong>support@swachhbharat.gov.in</strong></p>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.bottomSection}>
          <p>© {new Date().getFullYear()} Swachh Bharat Mission Initiative. All rights reserved.</p>
          <p className={styles.govtDisclaimer}>Government of India Initiative</p>
        </div>
      </div>
    </footer>
  );
}

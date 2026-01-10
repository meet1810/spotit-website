
import Link from 'next/link';
import { FaCheckCircle, FaMapMarkerAlt, FaCamera } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import styles from '../../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Abstract Background Shapes */}
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🇮🇳</span> Swachh Bharat Mission Initiative
          </div>
          <h1 className={styles.title}>
            Spot Cleanliness Issues.<br />
            <span className={styles.highlight}>Build a Cleaner India.</span>
          </h1>
          <p className={styles.subtitle}>
            Join the citizen-led movement. Report garbage, track resolution, and earn rewards.
            Together, let's make our cities spotless with just a click.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#download" className={styles.primaryBtn}>
              <span>Download App</span>
            </Link>
            <Link href="#how-it-works" className={styles.secondaryBtn}>
              <span>How It Works</span>
            </Link>
          </div>


        </div>

        <div className={styles.heroVisual}>
          <div className={styles.visualCircle}></div>
          <div className={styles.mockupContainer}>
            {/* Main Glass Card */}
            <div className={styles.glassCard}>
              <div className={styles.cardHeader}>
                <div className={styles.userProfile}>
                  <div className={styles.avatar}></div>
                  <div className={styles.userInfo}>
                    <div className={styles.lineSm}></div>
                    <div className={styles.lineXs}></div>
                  </div>
                </div>
                <div className={styles.statusIndicator}>
                  <MdVerified className={styles.verifiedIcon} />
                </div>
              </div>

              <div className={styles.imagePlaceholder}>
                <FaCamera className={styles.cameraIcon} />
                <span className={styles.imgLabel}>Issue Captured</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.uploadInfo}>
                  <div className={styles.infoRow}>
                    <FaMapMarkerAlt className={styles.mapIcon} />
                    <span>MG Road, Indiranagar</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.timeTag}>Just now</span>
                  </div>
                </div>
                <div className={styles.statusBar}>
                  <div className={styles.statusStep}></div>
                  <div className={styles.statusStep}></div>
                  <div className={styles.statusStep}></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className={styles.floatingBadge1}>
                <FaCheckCircle /> <span>Verified</span>
              </div>
              <div className={styles.floatingBadge2}>
                <span>Clean India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

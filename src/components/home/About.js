
import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div className={styles.contentCol}>
            <div className={styles.label}>About Us</div>
            <h2 className={styles.title}>EMPOWERING CITIZENS FOR A CLEANER NATION</h2>
            <p className={styles.description}>
              SPOT IT is a citizen-driven cleanliness reporting platform aligned with the Swachh Bharat Mission. It empowers citizens to actively participate in maintaining cleanliness by reporting issues directly to local authorities through a transparent and efficient digital system.
            </p>
            <p className={styles.description}>
              Report uncollected garbage, debris, or unsanitary conditions in seconds. Your report goes directly to the responsible sanitation department for immediate action.
            </p>
            
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statText}>Reporting System</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statText}>Transparency</span>
              </div>
            </div>
          </div>
          
          <div className={styles.cardsCol}>
            <div className={`${styles.card} ${styles.card1}`}>
              <div className={styles.cardIcon}>🤝</div>
              <h3 className={styles.cardTitle}>Citizen Participation</h3>
              <p className={styles.cardText}>Turning every citizen into a stakeholder in the Clean India mission.</p>
            </div>
            
            <div className={`${styles.card} ${styles.card2}`}>
              <div className={styles.cardIcon}>🔍</div>
              <h3 className={styles.cardTitle}>Transparency</h3>
              <p className={styles.cardText}>Real-time tracking of issues from reporting to resolution.</p>
            </div>
            
            <div className={`${styles.card} ${styles.card3}`}>
              <div className={styles.cardIcon}>🇮🇳</div>
              <h3 className={styles.cardTitle}>Clean India</h3>
              <p className={styles.cardText}>Supporting the vision of a garbage-free and sustainable future.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

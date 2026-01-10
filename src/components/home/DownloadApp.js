
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import styles from '../../styles/DownloadApp.module.css';

export default function DownloadApp() {
  return (
    <section id="download" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.tag}>
              <span>🚀 Mobile App</span>
            </div>
            <h2 className={styles.title}>Become a part of the Clean India Movement</h2>
            <p className={styles.description}>
              Download the SPOT IT application today and start reporting issues in your neighborhood.
              Track your reports, earn karma points, and make a visible difference.
            </p>

            <div className={styles.storeButtons}>
              <button className={styles.storeBtn}>
                <FaGooglePlay className={styles.btnIcon} />
                <div className={styles.btnTextContainer}>
                  <span className={styles.btnSmallText}>GET IT ON</span>
                  <span className={styles.btnBigText}>Google Play</span>
                </div>
              </button>

              <button className={styles.storeBtn}>
                <FaApple className={styles.btnIcon} />
                <div className={styles.btnTextContainer}>
                  <span className={styles.btnSmallText}>Download on the</span>
                  <span className={styles.btnBigText}>App Store</span>
                </div>
              </button>
            </div>


          </div>

          <div className={styles.visual}>
            <div className={styles.phoneContainer}>
              <div className={styles.phoneFrame}>
                <div className={styles.notch}></div>
                <div className={styles.sideBtn}></div>
                <div className={styles.volBtn}></div>

                <div className={styles.screen}>
                  {/* App Header */}
                  <div className={styles.appHeader}>
                    <div className={styles.menuIcon}>
                      <div className={styles.bar}></div>
                      <div className={styles.bar}></div>
                    </div>
                    <span className={styles.appName}>Spot It</span>
                    <div className={styles.profileIcon}></div>
                  </div>

                  {/* App Map Area */}
                  <div className={styles.mapArea}>
                    <div className={styles.mapGrid}></div>

                    {/* Map Pins */}
                    <div className={`${styles.mapPin} ${styles.pin1}`}>
                      <div className={styles.pinHead}></div>
                      <div className={styles.pinPoint}></div>
                      <div className={styles.pulse}></div>
                    </div>

                    <div className={`${styles.mapPin} ${styles.pin2}`}>
                      <div className={styles.pinHeadGreen}></div>
                      <div className={styles.pinPointGreen}></div>
                    </div>

                    <div className={`${styles.mapPin} ${styles.pin3}`}>
                      <div className={styles.pinHeadGreen}></div>
                      <div className={styles.pinPointGreen}></div>
                    </div>

                    {/* User Location */}
                    <div className={styles.userLocation}>
                      <div className={styles.userDot}></div>
                      <div className={styles.userRange}></div>
                    </div>

                    {/* Bottom Action Card */}
                    <div className={styles.actionCard}>
                      <div className={styles.reportBtn}>
                        <span>REPORT ISSUE</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className={styles.bottomNav}>
                    <div className={`${styles.navItem} ${styles.active}`}>
                      <div className={styles.navIcon}></div>
                    </div>
                    <div className={styles.navItem}>
                      <div className={styles.navIconInactive}></div>
                    </div>
                    <div className={styles.navItem}>
                      <div className={styles.navIconInactive}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decor */}
            <div className={styles.glowEffect}></div>
            <div className={styles.floatingShape1}></div>
            <div className={styles.floatingShape2}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

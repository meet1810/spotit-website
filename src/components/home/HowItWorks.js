
import { MdCameraswitch, MdVerifiedUser } from "react-icons/md";
import { FaMapMarkedAlt, FaBroom } from "react-icons/fa";
import styles from '../../styles/HowItWorks.module.css';

const steps = [
  {
    id: 1,
    title: "Spot the Issue",
    description: "Identify garbage dumps, dirty areas, or sanitation issues in your locality.",
    icon: <MdCameraswitch />
  },
  {
    id: 2,
    title: "Capture & Report",
    description: "Take a photo, add location details, and submit a report via the mobile app.",
    icon: <FaMapMarkedAlt />
  },
  {
    id: 3,
    title: "Authority Review",
    description: "Local municipal authority receives the report and verifies the issue.",
    icon: <MdVerifiedUser />
  },
  {
    id: 4,
    title: "Resolution & Clean-Up",
    description: "The issue is resolved by sanitation workers and the status is updated.",
    icon: <FaBroom />
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            A transparent 4-step process to transform your city.
          </p>
        </div>
        
        <div className={styles.stepsContainer}>
          <div className={styles.grid}>
            {steps.map((step, index) => (
              <div key={step.id} className={styles.stepCard}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconInner}>
                    {step.icon}
                  </div>
                  <div className={styles.stepNumber}>{step.id}</div>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

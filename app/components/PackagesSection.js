import styles from '../styles/PackagesSection.module.css';

const PackagesSection = () => {
  const packages = [
    {
      title: "Half-Day Pass",
      price: "100, 000/-",
      duration: "Lifetime",
      description: "The ideal way to test the water.",
      details: ["1-Person Pass", "Usage: 4 Hours", "For Hot Desking only"],
    },
    {
      title: "1- Day Pass",
      price: "100, 000/-",
      duration: "Lifetime",
      description: "The ideal way to test the water.",
      details: ["1-Person Pass", "Usage: 9 hours (including break)", "For Hot Desking only"],
    },
    {
      title: "Weekly Pass",
      price: "100, 000/-",
      duration: "Lifetime",
      description: "The ideal way to test the water.",
      details: ["1-Person Pass", "Usage: 1 Work Week – that is 5 full weekdays used at a stretch.", "For Hot Desking only"],
    },
    {
      title: "10-day Pass",
      price: "100, 000/-",
      duration: "Lifetime",
      description: "The ideal way to test the water.",
      details: ["1-Person Pass", "Usage: 2 Work Weeks – that is 10 full weekdays used at a stretch.", "For Hot Desking and Dedicated Desks only"],
    },
    {
      title: "1-Month Pass",
      price: "100, 000/-",
      duration: "Lifetime",
      description: "The ideal way to test the water.",
      details: ["1-Person Pass", "Usage: 1 Month used at a stretch. Weekdays only.", "For Hot Desking, Dedicated Desks and Private Workspaces."],
    },
    {
      title: "Team Pass",
      price: "100, 000/-",
      duration: "Lifetime",
      description: "The ideal way to test the water.",
      details: ["5-Person Pass", "Usage: 1 Month used at a stretch. Weekdays only.", "For Hot Desking, Dedicated Desks and Private Workspaces.", "Free 8-hour pass for Meeting Spaces taken by the hour."],
    },
  ];
  return (
    <section className={styles.packages}>
      <h2>Our Packages</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Half-Day Pass</h3>
          <p className={styles.price}>100,000/- <span>Lifetime</span></p>
          <p>The ideal way to test the water.</p>
          <button className={styles.getStarted}>Get Started</button>
          <ul>
            <li>1-Person Pass</li>
            <li>Usage: 4 Hours</li>
            <li>For Hot Desking only</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>1-Day Pass</h3>
          <p className={styles.price}>100,000/- <span>Lifetime</span></p>
          <p>The ideal way to test the water.</p>
          <button className={styles.getStarted}>Get Started</button>
          <ul>
            <li>1-Person Pass</li>
            <li>Usage: 9 hours (including break)</li>
            <li>For Hot Desking only</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Weekly Pass</h3>
          <p className={styles.price}>100,000/- <span>Lifetime</span></p>
          <p>The ideal way to test the water.</p>
          <button className={styles.getStarted}>Get Started</button>
          <ul>
            <li>1-Person Pass</li>
            <li>Usage: 1 Work Week - that is 5 full weekdays used at a stretch.</li>
            <li>For Hot Desking only</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>10-day Pass</h3>
          <p className={styles.price}>100,000/- <span>Lifetime</span></p>
          <p>The ideal way to test the water.</p>
          <button className={styles.getStarted}>Get Started</button>
          <ul>
            <li>1-Person Pass</li>
            <li>Usage: 2 Work Weeks - 10 full weekdays used at a stretch.</li>
            <li>For Hot Desking only</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>1-Month Pass</h3>
          <p className={styles.price}>100,000/- <span>Lifetime</span></p>
          <p>The ideal way to test the water.</p>
          <button className={styles.getStarted}>Get Started</button>
          <ul>
            <li>1-Person Pass</li>
            <li>Usage: 1 Month used at a stretch. Weekdays only.</li>
            <li>For Hot Desking only</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Team Pass</h3>
          <p className={styles.price}>100,000/- <span>Lifetime</span></p>
          <p>The ideal way to test the water.</p>
          <button className={styles.getStarted}>Get Started</button>
          <ul>
            <li>5-Person Pass</li>
            <li>Usage: 1 Month used at a stretch. Weekdays only.</li>
            <li>For Hot Desking only</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;

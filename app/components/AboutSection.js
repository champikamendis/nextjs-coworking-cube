import styles from '../styles/AboutUs.module.css';

const AboutSection = () => {
  const features = [
    { id: 1, title: 'Quick Commute', icon: '/images/quick-commute.png' },
    { id: 2, title: 'Low Cost', icon: '/images/low-cost.png' },
    { id: 3, title: 'Serene Environment', icon: '/images/quick-commute.png' },
    { id: 4, title: 'Thriving Community', icon: '/images/quick-commute.png' },
  ];

  return (
    <section className={styles.aboutUs}>
      <div className={styles.content}>
        <h2><div>A Safe Hi-tech Work Space </div>
        <span>for all your Business!</span></h2>
        <p>Are you tired of travelling for hours to your office within Colombo? Do you work from home most of the time, but need a quieter working space occasionally? Do you need a meeting space for your remote employees who live inside and outside Colombo?</p>
        <p>The Coworking Cube story began in 2023 when our founders wanted to provide easily accessible core working spaces for startups, freelancers, and Tech Nomads.</p>
        <h3>Our Vision</h3>
        <p>Creating an active coworking space that becomes an incubator for technology in Sri Lanka</p>
        <h3>Our Mission</h3>
        <p>To create accessible and affordable hi-tech workspaces to professionals in Sri Lanka.</p>
      </div>
      <div className={styles.features}>
        {features.map(feature => (
          <div key={feature.id} className={styles.feature}>
            <img src={feature.icon} alt={feature.title} className={styles.icon} />
            <h3 className={styles.title}>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;

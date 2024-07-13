import styles from '../styles/FeatureSection.module.css';

const FeatureSection = () => {
  const benefits = [
    { id: 1, title: 'Enhanced Productivity', icon: '/images/productivity.png' },
    { id: 2, title: 'High Speed Internet', icon: '/images/internet.png' },
    { id: 3, title: 'Networking & Collaboration with other Professionals', icon: '/images/networking.png' },
    { id: 4, title: 'Fully Equipped and Technology Ready Workspaces', icon: '/images/equipped.png' },
    { id: 5, title: 'Printing and Copying Facilities (at Extra Charge)', icon: '/images/printing.png' },
    { id: 6, title: 'Complimentary Tea and Coffee (Self-Serviced)', icon: '/images/tea-coffee.png' },
    { id: 7, title: 'Save Money & Time', icon: '/images/save-money.png' },
  ];

  return (
    <section className={styles.benefits}>
      <h2 className={styles.heading}>Features & Benefits of Coworking with Us:</h2>
      <div className={styles.benefitsGrid}>
        {benefits.map(benefit => (
          <div key={benefit.id} className={styles.benefit}>
            <img src={benefit.icon} alt={benefit.title} className={styles.icon} />
            <p>{benefit.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.descriptionBox}>
        <h3>Why Coworking Cube?</h3>
        <p className={styles.mainText}>We revolutionize your workspace!</p>
        <p>
          Coworking Cube was built with technology, focus and comfort in mind. Just 5 minutes from the Makumbura Multimodal Center with multiple forms of transport, and ample parking within the Coworking Cube premises itself. Secure meeting rooms for small to medium-sized teams. Standard long-term packages and custom office solutions.
        </p>
        <p>
          With quick access to the nearby town and delicious eateries, our coworking spaces are a comfortable place you can focus at and get your brain juices flowing.
        </p>
      </div>
    </section>
  )
};

export default FeatureSection;

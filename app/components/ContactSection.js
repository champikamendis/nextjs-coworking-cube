import styles from '../styles/ContactSection.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5798694225395!2d80.00234641477665!3d6.924046995001998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593136c6d85d%3A0x9db4e54ae2d54a02!2sWTC%20West%20Tower!5e0!3m2!1sen!2slk!4v1647403470571!5m2!1sen!2slk"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.membership}>
        <div className={styles.content}>
          <h2 className={styles.subheading}>Become a member</h2>
          <h1 className={styles.heading}>
            Ready to try different work experience now?
          </h1>
          <p className={styles.description}>
            Get the best working experience that you never feel before
          </p>
          <a href="/subscribe" className={styles.button}>Subscribe Now</a>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/man-image.png" alt="Member" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// components/HeroSection.js
import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroTextWrapper}>
        <h1 className={styles.heading}>
          <span className={styles.highlight}>Co-working</span> Spaces with Easy Commute Near Colombo
        </h1>
        <p className={styles.description}>
          Nestled conveniently just outside the city with an inspiring environment designed to maximize your productivity and well-being – minus the urban frenzy and high cost
        </p>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.location}>
            <h2 className={styles.city}>Colombo</h2>
            <a href="/plans" className={styles.button}>View Plans</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

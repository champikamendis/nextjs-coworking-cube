import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Coworking Cube</h3>
          <p>We offer comfortable spaces, cozy cafe, high-speed internet, spacious parking area and many more for your best workspaces and meetings</p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/youtube.svg" alt="YouTube" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.svg" alt="Facebook" />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <p>
            <strong>Email:</strong> Hello@coworkingcube.com<br />
            <strong>Address:</strong> Jalan Jayakatwang No.301 Ngasem, Kediri<br />
            <strong>Phone:</strong> (+62) 82334670000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

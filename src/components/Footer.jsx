import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import styles from "../modules/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.iconLink}>
              <FaFacebookF className={styles.icon} />
            </a>
            <a href="#" className={styles.iconLink}>
              <FaTwitter className={styles.icon} />
            </a>
            <a href="#" className={styles.iconLink}>
              <FaInstagram className={styles.icon} />
            </a>
            <a href="#" className={styles.iconLink}>
              <FaLinkedinIn className={styles.icon} />
            </a>
            <a href="#" className={styles.iconLink}>
              <FaYoutube className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.links}>
            <li>
              <a href="#" className={styles.link}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Contact
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>Contact Info</h3>
          <p className={styles.text}>Email: info@example.com</p>
          <p className={styles.text}>Phone: +1 (123) 456-7890</p>
          <p className={styles.text}>Address: 123 Shoe St, City, State</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; 2023 Shoe Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

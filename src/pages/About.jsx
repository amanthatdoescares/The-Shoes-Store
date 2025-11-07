import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../modules/About.module.css";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <main>
      {/* Hero Section */}
      <section ref={ref} className={styles.heroSection}>
        <motion.div
          className={styles.heroBackground}
          style={{
            backgroundImage: "url('/images/about_image_red.png')",
            scale: backgroundScale,
            y: backgroundY,
            opacity: backgroundOpacity,
          }}
        ></motion.div>
        <motion.div
          className={styles.heroText}
          style={{
            opacity: textOpacity,
            y: textY,
          }}
        >
          <h1 className={styles.heroTitle}>JUST DO IT</h1>
          <p className={styles.heroSubtitle}>
            Bringing inspiration and innovation to every athlete in the world.
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className={`container ${styles.introSection}`}>
        <h2 className={styles.introTitle}>Our Story</h2>
        <p className={styles.introText}>
          Founded in 1964 as Blue Ribbon Sports, Nike has evolved into a global
          leader in athletic footwear, apparel, and equipment. Our journey began
          with a simple mission to provide athletes with the best possible gear
          to achieve their goals.
        </p>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={`container ${styles.missionContainer}`}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            To bring inspiration and innovation to every athlete in the world.
            If you have a body, you are an athlete. We design products that help
            you perform better, look better, and feel better.
          </p>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className={`container ${styles.philosophySection}`}>
        <h2 className={styles.philosophyTitle}>Brand Philosophy</h2>
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyItem}>
            <h3>Innovation</h3>
            <p>
              Constantly pushing boundaries to create cutting-edge technology
              and design.
            </p>
          </div>
          <div className={styles.philosophyItem}>
            <h3>Sustainability</h3>
            <p>
              Committed to environmental responsibility and sustainable
              practices.
            </p>
          </div>
          <div className={styles.philosophyItem}>
            <h3>Inclusivity</h3>
            <p>
              Celebrating diversity and empowering athletes of all backgrounds.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

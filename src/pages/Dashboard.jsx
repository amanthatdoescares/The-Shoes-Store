import React from "react";
import styles from "../modules/Dashboard.module.css";

const Dashboard = () => {
  return (
    <main className="container">
      <section className={styles.dashboardSection}>
        <h1 className={styles.title}>Welcome to Your Dashboard</h1>
        <p className={styles.subtitle}>
          Manage your account and explore our features.
        </p>

        <div className={styles.dashboardGrid}>
          <div className={styles.card}>
            <h3>Profile</h3>
            <p>View and edit your personal information.</p>
            <button className={styles.cardButton}>Go to Profile</button>
          </div>
          <div className={styles.card}>
            <h3>Orders</h3>
            <p>Track your recent orders and purchases.</p>
            <button className={styles.cardButton}>View Orders</button>
          </div>
          <div className={styles.card}>
            <h3>Wishlist</h3>
            <p>Check out your saved items.</p>
            <button className={styles.cardButton}>View Wishlist</button>
          </div>
          <div className={styles.card}>
            <h3>Settings</h3>
            <p>Customize your account preferences.</p>
            <button className={styles.cardButton}>Go to Settings</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

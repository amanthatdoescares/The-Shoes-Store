import { useState } from "react";
import styles from "../modules/Login.module.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginBackground}>
      <div className={styles.loginCard}>
        <img
          src="/images/shoes_image1.png"
          alt="Login Image"
          className={styles.loginImage}
        />
        <div className={styles.rightSection}>
          <h1>Welcome Back!</h1>
          <p>Sign in to your account</p>
          <form className={styles.loginForm}>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
            />
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={styles.inputField}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={styles.eyeIcon}
              >
                <img
                  src={
                    showPassword
                      ? "/icons/eye_icon_open.png"
                      : "/icons/eye_icon.png"
                  }
                  alt="Toggle password visibility"
                  className={styles.eyeImage}
                />
              </button>
            </div>
            <div className={styles.options}>
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" className={styles.forgotPassword}>
                Forgot Password?
              </a>
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
            <div className={styles.divider}>
              <span>Quick Login</span>
            </div>
            <div className={styles.socialButtons}>
              <button className={styles.socialButton}>Google</button>
              <button className={styles.socialButton}>Facebook</button>
            </div>
            <p className={styles.footerText}>
              Don’t have an account? <a href="#">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../modules/Login.module.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={styles.loginBackground}>
      <div className={styles.loginCard}>
        <img
          src="/images/shoes_image1.png"
          alt="Signup Image"
          className={styles.loginImage}
        />
        <div className={styles.rightSection}>
          <h1>Join Us!</h1>
          <p>Create your account</p>
          <form className={styles.loginForm}>
            <input
              type="text"
              placeholder="Username"
              className={styles.inputField}
            />
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
            <div className={styles.passwordContainer}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={styles.inputField}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className={styles.eyeIcon}
              >
                <img
                  src={
                    showConfirmPassword
                      ? "/icons/eye_icon_open.png"
                      : "/icons/eye_icon.png"
                  }
                  alt="Toggle confirm password visibility"
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
              Sign Up
            </button>
            <div className={styles.divider}>
              <span>Quick Sign Up</span>
            </div>
            <div className={styles.socialButtons}>
              <button className={styles.socialButton}>
                <img src="/icons/google.png" alt="Google" />
                Signup with Google
              </button>
              <button className={styles.socialButton}>
                <img src="/icons/facebook.png" alt="Facebook" />
                Signup with Facebook
              </button>
            </div>
            <p className={styles.footerText}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import { useState } from "react";
import { Link } from "react-router-dom";
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
              <button className={styles.socialButton}>
                <img src="/icons/google.png" alt="Google" />
                Login with Google
              </button>
              <button className={styles.socialButton}>
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="facebookicon"
                />
                Login with Facebook
              </button>
            </div>
            <p className={styles.footerText}>
              Don’t have an account? <Link to="/signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

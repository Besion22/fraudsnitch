import styles from "../assets/styles/navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">FraudWatch</a>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a
            href="/report
          "
          >
            Report Fraud
          </a>
        </li>
        <li>
          <a href="/educational">Learn About Fraud</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import styles from "@/components/Navbar/Logo/Logo.module.css";
const Logo = () => {
  return (
    <div className={`${styles.logoWrapper}`}>
      <h2 className={styles.logo}>olympus</h2>
      <h6 className={styles.motto}>education</h6>
    </div>
  );
};

export default Logo;

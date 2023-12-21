import styles from "@/components/Navbar/Logo/Logo.module.css";
import { Roboto_Slab } from "next/font/google";
const roboto = Roboto_Slab({ subsets: ["cyrillic"], weight: ["900"] });

const Logo = () => {
  return (
    <div className={`${styles.logoWrapper} ${roboto.className}`}>
      <h2 className={styles.logo}>olympus</h2>
      <h6 className={styles.motto}>education</h6>
    </div>
  );
};

export default Logo;

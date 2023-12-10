"use client";
import styles from "@/components/Navbar/Navbar.module.css";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import UserMenu from "./UserMenu/UserMenu";
import Capsule from "../Capsule/Capsule";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navContainer}>
          <div className={styles.navItem}>
            <Logo />
          </div>
          <div className={styles.navItem}>
            <Capsule />
          </div>
          <div className={styles.navItem}>
            <UserMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

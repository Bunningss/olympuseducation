"use client";
import styles from "@/components/Navbar/Navbar.module.css";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Dropdown from "../Dropdown/Dropdown";
import User from "../User/User";
import DropdownItem from "../Dropdown/DropdownItem/DropdownItem";
import { useContext } from "react";
import Context from "@/Context/context";

const Navbar = () => {
  const { userDropdownOpen, setUserDropdownOpen } = useContext(Context);
  const { loginModalOpen, setLoginModalOpen } = useContext(Context);
  const { registerModalOpen, setRegisterModalOpen } = useContext(Context);

  const navDropdown = (
    <div>
      <DropdownItem label="about us" />
      <DropdownItem label="our courses" />
      <DropdownItem
        label="login"
        action={() => setLoginModalOpen(!loginModalOpen)}
      />
      <DropdownItem
        label="register"
        action={() => setRegisterModalOpen(!registerModalOpen)}
      />
    </div>
  );
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navContainer}>
          <div className={styles.navItem}>
            <Logo />
          </div>
          <div className={styles.navItem}>
            <Dropdown
              body={navDropdown}
              dropdownOpen={userDropdownOpen}
              setDropdownOpen={setUserDropdownOpen}
            >
              <User />
            </Dropdown>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

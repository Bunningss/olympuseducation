"use client";
import styles from "@/components/Navbar/Navbar.module.css";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Dropdown from "../Dropdown/Dropdown";
import User from "../User/User";
import DropdownItem from "../Dropdown/DropdownItem/DropdownItem";
import { useContext } from "react";
import Context from "@/Context/context";
import login from "../../../public/images/icons/login.png";
import logout from "../../../public/images/icons/logout.png";
import register from "../../../public/images/icons/register.png";
import admin from "../../../public/images/icons/admin.png";
import home from "../../../public/images/icons/home.png";
import course from "../../../public/images/icons/course.png";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { userDropdownOpen, setUserDropdownOpen } = useContext(Context);
  const { loginModalOpen, setLoginModalOpen } = useContext(Context);
  const { registerModalOpen, setRegisterModalOpen } = useContext(Context);

  const navDropdown = (
    <div>
      <DropdownItem label="home" icon={home} action={() => router.push("/")} />
      <DropdownItem label="our courses" icon={course} />
      <DropdownItem
        label="login"
        action={() => setLoginModalOpen(!loginModalOpen)}
        icon={login}
      />
      <DropdownItem
        label="register"
        action={() => setRegisterModalOpen(!registerModalOpen)}
        icon={register}
      />
      <DropdownItem label="logout" icon={logout} />
      <DropdownItem
        label="dashboard"
        action={() => router.push("/dashboard")}
        icon={admin}
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
              isOpen={userDropdownOpen}
              onClose={setUserDropdownOpen}
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

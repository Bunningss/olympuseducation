"use client";
import styles from "@/components/Navbar/Navbar.module.css";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Dropdown from "../Dropdown/Dropdown";
import User from "../User/User";
import DropdownItem from "../Dropdown/DropdownItem/DropdownItem";
import login from "../../../public/images/icons/login.png";
import logout from "../../../public/images/icons/logout.png";
import register from "../../../public/images/icons/register.png";
import admin from "../../../public/images/icons/admin.png";
import home from "../../../public/images/icons/home.png";
import course from "../../../public/images/icons/course.png";
import { useRouter } from "next/navigation";
import useNavDropdown from "@/hooks/zustand/useNavDropdown";
import useLoginModal from "@/hooks/zustand/useLoginModal";
import useRegisterModal from "@/hooks/zustand/useRegisterModal";
import useLogout from "@/hooks/useLogout";
import useValidate from "@/hooks/useValidate";

const Navbar: React.FC = () => {
  const router = useRouter();
  const navDropdownState = useNavDropdown();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const { user } = useValidate();
  const { isloggedOut } = useLogout();

  const navDropdown = (
    <div>
      <DropdownItem label="home" icon={home} action={() => router.push("/")} />
      <DropdownItem label="our courses" icon={course} />

      {!user.firstName && (
        <>
          <DropdownItem label="login" action={loginModal.onOpen} icon={login} />
          <DropdownItem
            label="register"
            action={registerModal.onOpen}
            icon={register}
          />
        </>
      )}

      {user?.role === "SUPER ADMIN" && "ADMIN" && "LEVEL 2" && (
        <DropdownItem
          label="dashboard"
          action={() => router.push("/dashboard")}
          icon={admin}
        />
      )}

      {user.firstName && (
        <DropdownItem label="logout" icon={logout} action={isloggedOut} />
      )}
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
              isOpen={navDropdownState.isOpen}
              onOpen={navDropdownState.onOpen}
              onClose={navDropdownState.onClose}
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

"use client";
import styles from "./UserMenu.module.css";
import Image from "next/image";

import Avatar from "../../../../public/images/icons/userIcon.png";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem/MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className={styles.usermenu} onClick={toggleOpen}>
      <div className={styles.hamburger}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <Image alt="Avatar" src={Avatar} width={20} height={20} />
      {isOpen && (
        <div className={styles.menu}>
          <MenuItem label="Register" handleClick={registerModal.onOpen} />
          <MenuItem label="Log In" handleClick={loginModal.onOpen} />
        </div>
      )}
    </div>
  );
};

export default UserMenu;

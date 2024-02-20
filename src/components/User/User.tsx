import styles from "./User.module.css";
import Image from "next/image";
import Avatar from "../../../public/images/icons/userIcon.png";

const User: React.FC = () => {
  return (
    <div className={styles.usermenu}>
      <div className={styles.hamburger}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <Image alt="Avatar" src={Avatar} width={20} height={20} />
    </div>
  );
};

export default User;

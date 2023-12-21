import Image from "next/image";
import styles from "./Social.module.css";
import facebook from "../../../public/images/icons/facebook.png";
import instagram from "../../../public/images/icons/instagram.png";
import youtube from "../../../public/images/icons/youtube.png";

import { roboto } from "@/app/layout";

const Social = () => {
  return (
    <div className={styles.social}>
      <div className={styles.socialIcons}>
        <Image className={styles.socialIcon} src={facebook} alt="Facebook" />
        <Image className={styles.socialIcon} src={instagram} alt="Instagram" />
        <Image className={styles.socialIcon} src={youtube} alt="Twitter" />
      </div>
      <h2 className={`${styles.socialText} ${roboto.className}`}>Follow us</h2>
    </div>
  );
};

export default Social;

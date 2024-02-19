import styles from "./Social.module.css";

import { roboto } from "@/fonts/fonts";
import { socialItems } from "@/utils/static";
import SocialItem from "../SocialItem/SocialItem";

const Social: React.FC = () => {
  return (
    <div className={styles.social}>
      <div className={styles.socialIcons}>
        {socialItems.map((item, indx) => (
          <SocialItem key={indx} item={item} />
        ))}
      </div>
      <h2 className={`${styles.socialText} ${roboto.className}`}>Follow us</h2>
    </div>
  );
};

export default Social;

import styles from "./BackgroundText.module.css";
import { roboto } from "@/fonts/fonts";

const BackgroundText = () => {
  return (
    <h2 className={`${styles.backgroundText} ${roboto.className}`}>
      our vision
    </h2>
  );
};

export default BackgroundText;

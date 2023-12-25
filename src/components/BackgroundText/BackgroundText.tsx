import styles from "./BackgroundText.module.css";
import { roboto } from "@/fonts/fonts";

interface BackgroundTextProps {
  primaryText?: string;
  outlineText?: string;
}

const BackgroundText: React.FC<BackgroundTextProps> = ({
  primaryText,
  outlineText,
}) => {
  return (
    <>
      {primaryText && (
        <h2 className={`${styles.backgroundText} ${roboto.className}`}>
          our vision
        </h2>
      )}
      {outlineText && (
        <h2 className={styles.backgroundTextSecondary}>we are superstars</h2>
      )}
    </>
  );
};

export default BackgroundText;

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
          {primaryText}
        </h2>
      )}
      {outlineText && (
        <h2 className={styles.backgroundTextSecondary}>{outlineText}</h2>
      )}
    </>
  );
};

export default BackgroundText;

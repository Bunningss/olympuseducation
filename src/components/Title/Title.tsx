import styles from "./Title.module.css";
import { Roboto_Slab } from "next/font/google";
const roboto = Roboto_Slab({ subsets: ["cyrillic"] });
interface TitleProps {
  primaryTitle?: string;
  secondaryTitle?: string;
  tagline?: string;
  isPrimaryCentre?: boolean;
  isSecondaryCentre?: boolean;
  isTaglineCentre?: boolean;
}

const Title: React.FC<TitleProps> = ({
  primaryTitle,
  secondaryTitle,
  tagline,
  isPrimaryCentre,
  isSecondaryCentre,
  isTaglineCentre,
}) => {
  return (
    <div className={`${styles.titleWrapper} ${roboto.className}`}>
      {tagline && <h5 className={styles.headingSmall}>{tagline}</h5>}
      {secondaryTitle && (
        <h3
          className={
            isSecondaryCentre
              ? `${styles.headingMed} ${styles.center}`
              : `${styles.headingMed}`
          }
        >
          {secondaryTitle}
        </h3>
      )}
      {primaryTitle && <h2 className={styles.titleLarge}>{primaryTitle}</h2>}
    </div>
  );
};

export default Title;

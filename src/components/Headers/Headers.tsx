import { roboto } from "@/fonts/fonts";
import styles from "./Headers.module.css";

interface HeadersProps {
  primary?: string;
  secondary?: string;
  tagline?: string;
  isSecondaryCentre?: boolean;
  lightweight?: boolean;
}

const Headers: React.FC<HeadersProps> = ({
  primary,
  secondary,
  tagline,
  isSecondaryCentre,
  lightweight,
}) => {
  return (
    <div
      className={
        lightweight
          ? `${styles.titleWrapper} ${styles.lightweight} ${roboto.className}`
          : `${styles.titleWrapper} ${roboto.className}`
      }
    >
      {/* Tagline */}
      {tagline && <h5 className={styles.headingSmall}>{tagline}</h5>}
      {/* Primary */}
      {primary && (
        <h2 className={`${styles.headerPrimary} ${styles.gradient}`}>
          {primary}
        </h2>
      )}
      {/* Secondary */}
      {secondary && (
        <h3
          className={
            isSecondaryCentre
              ? `${styles.headerSecondary} ${styles.center}`
              : `${styles.headerSecondary}`
          }
        >
          {secondary}
        </h3>
      )}
    </div>
  );
};

export default Headers;

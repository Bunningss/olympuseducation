import styles from "./Title.module.css";

interface TitleProps {
  primaryTitle?: string;
  headingMed?: string;
  headingSmall?: string;
}

const Title: React.FC<TitleProps> = ({
  primaryTitle,
  headingMed,
  headingSmall,
}) => {
  return (
    <div className={styles.titleWrapper}>
      {primaryTitle && <h2 className={styles.titleLarge}>{primaryTitle}</h2>}
      {headingMed && <h3 className={styles.headingMed}>{headingMed}</h3>}
      {headingSmall && <h5 className={styles.headingSmall}>{headingSmall}</h5>}
    </div>
  );
};

export default Title;

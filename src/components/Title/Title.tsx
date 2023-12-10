import styles from "./Title.module.css";

interface TitleProps {
  primaryTitle: string;
}

const Title: React.FC<TitleProps> = ({ primaryTitle }) => {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.titleLarge}>{primaryTitle}</h2>
    </div>
  );
};

export default Title;

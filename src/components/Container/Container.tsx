// "use client";
import styles from "@/components/Container/Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Container;

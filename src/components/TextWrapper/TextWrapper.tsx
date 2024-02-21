import styles from "./TextWrapper.module.css";

interface TextWrapperProps {
  children: React.ReactNode;
}

const TextWrapper: React.FC<TextWrapperProps> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default TextWrapper;

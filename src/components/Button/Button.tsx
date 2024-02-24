import Loader from "../Loader/Loader";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles.buttonPrimary} ${
        outline && styles.buttonOutline
      }`}
    >
      {disabled && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      <span>{label}</span>
    </button>
  );
};

export default Button;

import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  errorMessage?: string;
  required: boolean;
  pattern?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  errorMessage,
  required,
  pattern,
}) => {
  return (
    <div className={styles.input}>
      <input
        required={required}
        pattern={pattern}
        type="email"
        className={styles.inputField}
        placeholder={placeholder}
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Input;

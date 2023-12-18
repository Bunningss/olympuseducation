import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  errorMessage?: string;
  required: boolean;
  pattern?: string;
  type: string;
  minimumValue?: number;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  errorMessage,
  required,
  pattern,
  type,
  minimumValue,
}) => {
  return (
    <div className={styles.input}>
      <input
        required={required}
        pattern={pattern}
        type={type}
        className={styles.inputField}
        placeholder={placeholder}
        min={minimumValue}
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Input;

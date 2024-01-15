import { ChangeEventHandler } from "react";
import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  errorMessage?: string;
  required: boolean;
  pattern?: string;
  type: string;
  name: string;
  minimumValue?: number;
  handleChange: ChangeEventHandler;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  errorMessage,
  required,
  pattern,
  type,
  minimumValue,
  name,
  handleChange
}) => {
  return (
    <div className={styles.input}>
      <input
        required={required}
        pattern={pattern}
        type={type}
        name={name}
        className={styles.inputField}
        placeholder={placeholder}
        min={minimumValue}
        onChange={handleChange}
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Input;

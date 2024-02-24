import { ChangeEventHandler } from "react";
import styles from "./Input.module.css";

interface InputProps {
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  required?: boolean;
  pattern?: string;
  type?: string;
  name: string;
  minimumValue?: number;
  handleChange: ChangeEventHandler;
  typeSelect?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  errorMessage,
  required,
  pattern,
  type,
  minimumValue,
  name,
  handleChange,
  typeSelect,
}) => {
  return (
    <>
      {!typeSelect && (
        <div className={styles.input}>
          <label htmlFor="" className={styles.label}>
            {label}
          </label>
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
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
        </div>
      )}
      {typeSelect && (
        <>
          <label htmlFor="" className={styles.label}>
            {label}
          </label>
          <select
            name={name}
            className={styles.inputField}
            onChange={handleChange}
          >
            <option value="I-01">I-01</option>
            <option value="I-02">I-02</option>
            <option value="I-03">I-03</option>
            <option value="I-04">I-04</option>
            <option value="I-05">I-05</option>
          </select>
        </>
      )}
    </>
  );
};

export default Input;

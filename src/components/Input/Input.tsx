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
  selectData?: string[];
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
  selectData,
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
        <div className={styles.input}>
          <label htmlFor="" className={styles.label}>
            {label}
          </label>
          <select
            name={name}
            className={styles.inputField}
            onChange={handleChange}
          >
            {selectData?.map((data, indx) => (
              <option value={data} key={indx}>
                {data}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default Input;

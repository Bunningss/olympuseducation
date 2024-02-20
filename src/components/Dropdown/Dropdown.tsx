import styles from "./Dropdown.module.css";
import DropdownModal from "./DropdownModal/DropdownModal";

interface DropdownProps {
  children: React.ReactNode;
  body: JSX.Element;
  dropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  body,
  dropdownOpen,
  setDropdownOpen,
}) => {
  return (
    <div className={styles.dropdown}>
      <div onClick={() => setDropdownOpen(!dropdownOpen)}>{children}</div>
      {dropdownOpen && (
        <DropdownModal>
          <div className={styles.modalBody}>{body}</div>
        </DropdownModal>
      )}
    </div>
  );
};

export default Dropdown;

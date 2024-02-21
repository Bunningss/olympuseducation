import styles from "./Dropdown.module.css";
import DropdownModal from "./DropdownModal/DropdownModal";

interface DropdownProps {
  children: React.ReactNode;
  body: JSX.Element;
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  body,
  isOpen,
  onClose,
}) => {
  return (
    <div className={styles.dropdown}>
      <div onClick={() => onClose(!isOpen)}>{children}</div>
      {isOpen && (
        <DropdownModal>
          <div className={styles.modalBody}>{body}</div>
        </DropdownModal>
      )}
    </div>
  );
};

export default Dropdown;

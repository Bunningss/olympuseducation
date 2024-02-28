import styles from "./Dropdown.module.css";
import DropdownModal from "./DropdownModal/DropdownModal";

interface DropdownProps {
  children: React.ReactNode;
  body: JSX.Element;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  body,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <div className={styles.dropdown}>
      <div onClick={isOpen ? onClose : onOpen}>{children}</div>
      {isOpen && (
        <DropdownModal>
          <div className={styles.modalBody}>{body}</div>
        </DropdownModal>
      )}
    </div>
  );
};

export default Dropdown;

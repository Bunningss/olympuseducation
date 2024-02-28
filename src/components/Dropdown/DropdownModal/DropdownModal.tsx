import { useContext } from "react";
import styles from "./DropdownModal.module.css";
import Context from "@/Context/context";
import useNavDropdown from "@/hooks/zustand/useNavDropdown";

interface DropdownModalProps {
  children: React.ReactNode;
}

const DropdownModal: React.FC<DropdownModalProps> = ({ children }) => {
  const dropdown = useNavDropdown();
  return (
    <div className={styles.dropdownModal} onClick={dropdown.onClose}>
      {children}
    </div>
  );
};

export default DropdownModal;

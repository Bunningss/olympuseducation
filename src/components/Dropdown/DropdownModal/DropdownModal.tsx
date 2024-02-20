import { useContext } from "react";
import styles from "./DropdownModal.module.css";
import Context from "@/Context/context";

interface DropdownModalProps {
  children: React.ReactNode;
}

const DropdownModal: React.FC<DropdownModalProps> = ({ children }) => {
  const { userDropdownOpen, setUserDropdownOpen } = useContext(Context);
  return (
    <div
      className={styles.dropdownModal}
      onClick={() => setUserDropdownOpen(!userDropdownOpen)}
    >
      {children}
    </div>
  );
};

export default DropdownModal;

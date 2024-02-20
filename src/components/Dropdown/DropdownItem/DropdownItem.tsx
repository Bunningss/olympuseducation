import Image, { StaticImageData } from "next/image";
import styles from "./DropdownItem.module.css";
import demo from "../../../../public/images/icons/facebook.png";

interface DropdownItemsProps {
  label: string;
  icon?: StaticImageData;
  action?: () => void;
}

const DropdownItem: React.FC<DropdownItemsProps> = ({ label, action }) => {
  return (
    <div className={styles.dropdownItem} onClick={action}>
      <Image src={demo} alt={label} className={styles.dropdownIcon} />
      <span>{label}</span>
    </div>
  );
};

export default DropdownItem;

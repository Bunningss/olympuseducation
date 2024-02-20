import Image, { StaticImageData } from "next/image";
import styles from "./DropdownItem.module.css";

interface DropdownItemsProps {
  label: string;
  icon?: StaticImageData;
  action?: () => void;
}

const DropdownItem: React.FC<DropdownItemsProps> = ({
  label,
  icon,
  action,
}) => {
  return (
    <div className={styles.dropdownItem} onClick={action}>
      {icon && <Image src={icon} alt={label} className={styles.dropdownIcon} />}
      <span>{label}</span>
    </div>
  );
};

export default DropdownItem;

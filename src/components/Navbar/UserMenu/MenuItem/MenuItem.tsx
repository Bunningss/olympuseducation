"use client";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
  label: string;
  handleClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, handleClick }) => {
  return (
    <h5 onClick={handleClick} className={styles.menuItem}>
      {label}
    </h5>
  );
};

export default MenuItem;

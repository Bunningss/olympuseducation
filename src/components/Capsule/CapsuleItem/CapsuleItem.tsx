import styles from "./CapsuleItem.module.css";

interface CapsuleItemProps {
  label: string;
}

const CapsuleItem: React.FC<CapsuleItemProps> = ({ label }) => {
  return <h4 className={styles.capsuleItem}>{label}</h4>;
};

export default CapsuleItem;

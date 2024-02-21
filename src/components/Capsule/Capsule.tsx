import styles from "./Capsule.module.css";
import CapsuleItem from "./CapsuleItem/CapsuleItem";

const Capsule: React.FC = () => {
  return (
    <div className={styles.capsule}>
      <CapsuleItem label="about us" />
      <CapsuleItem label="our courses" />
      <CapsuleItem label="Content" />
    </div>
  );
};

export default Capsule;

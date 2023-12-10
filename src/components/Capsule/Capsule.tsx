import styles from "./Capsule.module.css";
import CapsuleItem from "./CapsuleItem/CapsuleItem";

const Capsule = () => {
  return (
    <div className={styles.capsule}>
      <CapsuleItem label="about us" />
      <CapsuleItem label="our courses" />
      <CapsuleItem label="contact us" />
    </div>
  );
};

export default Capsule;

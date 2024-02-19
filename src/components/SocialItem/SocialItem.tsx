import Link from "next/link";
import styles from "./SocialItem.module.css";
import Image from "next/image";
import { SocialItemProps } from "@/utils/types";

interface SocialProps {
  item: SocialItemProps;
}

const SocialItem: React.FC<SocialProps> = ({ item }) => {
  return (
    <Link href={item.href} target="_blank">
      <Image className={styles.socialIcon} src={item.icon} alt={item.label} />
    </Link>
  );
};

export default SocialItem;

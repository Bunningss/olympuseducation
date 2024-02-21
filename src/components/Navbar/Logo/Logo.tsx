import styles from "@/components/Navbar/Logo/Logo.module.css";
import { roboto } from "@/fonts/fonts";
import Image from "next/image";
import logo from "../../../../public/images/logo.jpg";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div className={`${styles.logoWrapper} ${roboto.className}`}>
      <Link href="/">
        <Image src={logo} alt="Olympus" className={styles.logo} />
      </Link>
    </div>
  );
};

export default Logo;

import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Footer.module.css";
import { roboto } from "@/fonts/fonts";

import facebook from "../../../public/images/icons/facebook.png";
import instagram from "../../../public/images/icons/instagram.png";
import youtube from "../../../public/images/icons/youtube.png";
import linkedin from "../../../public/images/icons/linkedin.png";
import whatsapp from "../../../public/images/icons/whatsapp.png";
import Section from "../Section/Section";
import Link from "next/link";
import SocialItem from "../SocialItem/SocialItem";
import { socialItems } from "@/utils/static";

const Footer = () => {
  return (
    <Section>
      <Container>
        <div className={`${roboto.className} ${styles.footer}`}>
          <div className={styles.content}>
            <h4 className={styles.footerTitle}>Want to talk to us?</h4>
            <h2 className={styles.footerLink}>
              <a href="mailto:olympus@gmail.com">olympus@gmail.com</a>
            </h2>
            <h2 className={styles.footerLink}>
              <a href="tel:+8801254845052">+8801254845052</a>
            </h2>
            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
              {/* Location */}
              <div className={styles.footerBottomContentWrapper}>
                <h4 className={styles.footerBottomHeader}>We are here</h4>
                <p className={styles.footerBottomText}>
                  Panthapath, Dhaka, Bangladesh.
                </p>
              </div>
              {/* Social */}
              <div className={styles.footerBottomContentWrapper}>
                <h4 className={styles.footerBottomHeader}>follow us</h4>
                <div className={styles.socialLinks}>
                  {socialItems.map((item, indx) => (
                    <SocialItem key={indx} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;

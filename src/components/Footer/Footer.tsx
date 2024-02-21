import Container from "../Container/Container";
import styles from "./Footer.module.css";
import { roboto } from "@/fonts/fonts";

import Section from "../Section/Section";
import Link from "next/link";
import SocialItem from "../SocialItem/SocialItem";
import { socialItems } from "@/utils/static";
import Headers from "../Headers/Headers";

const Footer: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={`${roboto.className} ${styles.footer}`}>
          <div className={styles.content}>
            <div className={styles.footerTitle}>
              <Headers secondary="Want to talk to us?" lightweight />
            </div>
            <div className={styles.footerLink}>
              <Link href="mailto:olympuseducation@gmail.com">
                <Headers secondary="olympuseducation@gmail.com" />
              </Link>
            </div>
            <div className={styles.footerLink}>
              <Link href="tel:+8801254845052">
                <Headers secondary="+8801254845052" />
              </Link>
            </div>
            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
              {/* Location */}
              <div className={styles.footerBottomContentWrapper}>
                <Headers secondary="We are here" />
                <p className={styles.footerBottomText}>
                  Panthapath, Dhaka, Bangladesh.
                </p>
              </div>
              {/* Social */}
              <div className={styles.footerBottomContentWrapper}>
                <Headers secondary="Follow us" />
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

import Container from "../Container/Container";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.content}>
            <h4>Want to talk to us?</h4>
            <h2>
              <a href="mailto:olympus@gmail.com">olympus@gmail.com</a>
            </h2>
            {/* Location */}
            <div className={styles.location}></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

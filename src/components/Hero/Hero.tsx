import Container from "../Container/Container";
import Section from "../Section/Section";
import Social from "../Social/Social";
import styles from "./Hero.module.css";
import { roboto } from "@/fonts/fonts";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div className={`${styles.hero}`}>
          <div className={`${styles.heroTitleContainer} ${roboto.className}`}>
            <h1 className={styles.heroTitle}>
              creating <br /> the -
              <span className={styles.heroTitleOutlined}> future</span> <br />{" "}
              of aspirants
            </h1>
          </div>
          <div className={styles.heroSocialContainer}>
            <Social />
          </div>
          {/* Mouse Scroll */}
          <div className={styles.scrollDown}>
            <div className={styles.mousey}>
              <div className={styles.scroller}></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;

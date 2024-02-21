import Link from "next/link";
import BackgroundText from "../BackgroundText/BackgroundText";
import Container from "../Container/Container";
import Title from "../Headers/Headers";
import styles from "./About.module.css";
import { roboto } from "@/fonts/fonts";
import Section from "../Section/Section";
import Headers from "../Headers/Headers";
import TextWrapper from "../TextWrapper/TextWrapper";

const About: React.FC = () => {
  return (
    <Section>
      <div className={`${styles.about} ${roboto.className}`}>
        <BackgroundText outlineText="we are superstars" />
        <Container>
          <div className={styles.aboutContent}>
            <div className={styles.aboutSection}>
              <Headers primary="a team of expert professionals" />
            </div>
            <div className={styles.aboutSection}>
              <TextWrapper>
                We are a team of maestros hailing from different parts of the
                world.
              </TextWrapper>
              <Link href="" className={styles.aboutLink}>
                <TextWrapper>See our courses</TextWrapper>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default About;

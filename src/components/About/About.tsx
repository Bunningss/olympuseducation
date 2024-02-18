import Link from "next/link";
import BackgroundText from "../BackgroundText/BackgroundText";
import Container from "../Container/Container";
import Title from "../Title/Title";
import styles from "./About.module.css";
import { roboto } from "@/fonts/fonts";
import Section from "../Section/Section";

const About = () => {
  return (
    <Section>
      <div className={`${styles.about} ${roboto.className}`}>
        <BackgroundText outlineText="we are superstars" />
        <Container>
          <div className={styles.aboutContent}>
            <div className={styles.aboutSection}>
              <h2 className={styles.aboutTitle}>
                a team of expert professionals
              </h2>
            </div>
            <div className={styles.aboutSection}>
              <p className={styles.aboutText}>
                We are a team of maestros hailing from different parts of the
                world.
              </p>
              <Link href="" className={styles.aboutLink}>
                See our courses
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default About;

import styles from "./Vision.module.css";
import BackgroundText from "../BackgroundText/BackgroundText";
import Container from "../Container/Container";
import Title from "../Title/Title";
import Section from "../Section/Section";

const Vision = () => {
  return (
    <Section>
      <Container>
        <div className={styles.vision}>
          <BackgroundText primaryText="our vision" />
          <Title
            secondaryTitle="Here, we embrace the challenge to drive each other to excellence by enriching our own capabilities."
            tagline="We envision with a mission."
          />
          <div className={styles.visionTextContainer}>
            <h4 className={styles.visionText}>
              We have a unique combination of talents motivated by ambitious
              goals and a can-do attitude. Our drive to develop excellence is
              built on teamwork, passion, and giving students full control over
              their work to succeed on their own. We want to create an
              environment where ideas can flourish.
            </h4>
            <h4 className={styles.visionText}>
              We dream and dare to challenge the status quo and make a
              difference. We strive to develop a rich culture by expanding our
              horizons and bringing you ideas outside of the box.
            </h4>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Vision;

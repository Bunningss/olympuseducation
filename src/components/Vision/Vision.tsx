import styles from "./Vision.module.css";
import BackgroundText from "../BackgroundText/BackgroundText";
import Container from "../Container/Container";
import Title from "../Headers/Headers";
import Section from "../Section/Section";
import TextWrapper from "../TextWrapper/TextWrapper";

const Vision: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.vision}>
          <BackgroundText primaryText="our vision" />
          <Title
            secondary="Here, we embrace the challenge to drive each other to excellence by enriching our own capabilities."
            tagline="We envision with a mission."
          />
          <div className={styles.visionTextContainer}>
            <TextWrapper>
              We have a unique combination of talents motivated by ambitious
              goals and a can-do attitude. Our drive to develop excellence is
              built on teamwork, passion, and giving students full control over
              their work to succeed on their own. We want to create an
              environment where ideas can flourish.
            </TextWrapper>
            <TextWrapper>
              We dream and dare to challenge the status quo and make a
              difference. We strive to develop a rich culture by expanding our
              horizons and bringing you ideas outside of the box.
            </TextWrapper>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Vision;

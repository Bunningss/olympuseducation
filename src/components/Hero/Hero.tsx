import Container from "../Container/Container";
import styles from "./Hero.module.css";
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({ subsets: ["cyrillic"], weight: ["900"] });

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <Container>
        <div className={`${styles.heroTitleContainer} ${roboto.className}`}>
          <h1 className={styles.heroTitle}>
            creating <br /> the -
            <span className={styles.heroTitleOutlined}> future</span> <br /> of
            aspirants
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

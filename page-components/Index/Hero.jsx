/* eslint-disable prettier/prettier */
import { ButtonLink } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.project}>Sweet Sigs</span>
          <span className={styles.signature}>Email Signature</span>
          <span>Generator</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Explore Feed</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https://github.com/hoangvvo/nextjs-mongodb-app"
              type="secondary"
              className={styles.button}
            >
              GitHub
            </ButtonLink>
          </Container>
        </Container>
        <h3 className={styles.subtitle}>Professional Email Presentation in 3 Easy Steps!</h3>
        <Container justifyContent="space-evenly">
          <Card img="/images/handshake-simple-solid.svg" alt="handshake" title="Step 1:">Card Text</Card>
          <Card img="/images/address-book-solid.svg" alt="address book" title="Step 2:"></Card>
          <Card img="/images/people-group-solid.svg" alt="group of people" title="Step 3:"></Card>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Hero;

/* eslint-disable prettier/prettier */
import { ButtonLink } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <>
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
                GitHub2
              </ButtonLink>
            </Container>
          </Container>
          <h3 className={styles.subtitle}>Professional Email Presentation in 3 Easy Steps!</h3>
          <Container justifyContent="space-evenly">
            <Card img="/images/handshake-simple-solid.svg" alt="handshake" title="Step 1:">
              Select the size of your organization and how many signatures you need.
            </Card>
            <Card img="/images/address-book-solid.svg" alt="address book" title="Step 2:">
              Choose a template and upload a spreadsheet of individuals and their contact info. 
            </Card>
            <Card img="/images/people-group-solid.svg" alt="group of people" title="Step 3:">
              Generate templates to a local folder or send them directly to everyone via email.
            </Card>
          </Container>
        </div>
      </Wrapper>
      <div className={styles.fullwidth}>
        <h3 className={styles.subtitle}>Keep Image Appearance Consistent.</h3>
        <p className="p">We use AWS to host your images and keep the generative process running smoothly.</p>
      </div>
    </>
  );
};

export default Hero;

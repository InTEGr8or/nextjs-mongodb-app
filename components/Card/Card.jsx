/* eslint-disable prettier/prettier */
import styles from './Card.module.css';
import Image from 'next/image';

const Card = () => {
    return (
    <div className={styles.card}>
        <Image src="/images/default_user.jpg" alt="default image" width="300" height="300" />
        <div className={styles.container}>
            <h4><b>Test</b></h4> 
            <p>Description</p> 
        </div>
    </div>
    );
  };
  
export default Card;
  
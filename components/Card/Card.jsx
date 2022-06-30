/* eslint-disable prettier/prettier */
import styles from './Card.module.css';
import Image from 'next/image';
import { forwardRef } from 'react';


const Card = ({img}, {alt}) => {
    return (
    <div className={styles.card}>
        <Image src={img} alt={alt} width="150" height="150" />
        <div className={styles.container}>
            <h4><b>Test</b></h4> 
            <p>Description</p> 
        </div>
    </div>
    );
  };
  
export default Card;
  
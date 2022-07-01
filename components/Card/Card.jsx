/* eslint-disable prettier/prettier */
import styles from './Card.module.css';
import Image from 'next/image';
import { forwardRef } from 'react';


const Card = forwardRef(function Card(
    {
        img,
        alt,
        title,
        children
    },
    ref
) {
    return (
    <div 
        className={styles.card}
        ref={ref}
    >
        <div  className={styles.icon}>
            <Image src={img} alt={alt} width="150" height="150" />
        </div>
        <div className={styles.container}>
            <h4><b>{title}</b></h4> 
            <p>{children}</p>
        </div>
    </div>
    );
})

export default Card;
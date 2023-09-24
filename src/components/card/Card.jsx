import React from 'react'
import styles from "./card.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src="/p1.jpeg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>30.08.2021 - </span>
                    <span className={styles.category}>SCIENCE</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita   tempore totam nihil atque laborum accusamus quos facere explicabo minima sequi    hic consectetur fugiat possimus unde fugit sapiente, quae nemo?
                </p>
                <Link className={styles.link} href="/">Read More</Link>
            </div>
        </div>
    )
}

export default Card
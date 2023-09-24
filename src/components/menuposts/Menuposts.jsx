import React from 'react'
import styles from "./menuposts.module.css";
import Link from 'next/link';
import Image from 'next/image';

const Menuposts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.arts}`} >Arts</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 11.03.2005</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`} >Food</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 11.03.2005</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.health}`} >Health</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 11.03.2005</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.tech}`} >Tech</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 11.03.2005</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Menuposts
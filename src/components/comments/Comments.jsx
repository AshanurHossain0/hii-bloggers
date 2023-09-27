import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder='write a comment...' className={styles.input} />
                    <button className={styles.button}>Post</button>
                </div>
            ) : (<Link href="/login">Login to write a comment</Link>)}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" className={styles.image} alt="" width={50} height={50} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Ashanur Hossain</span>
                            <span className={styles.date}>20.08.2021</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati numquam quo quisquam, expedita nemo dignissimos vitae rerum repellat dolores!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments
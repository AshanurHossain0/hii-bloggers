import React from 'react'
import styles from "./singlePage.module.css";
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Ashanur Hossain</span>
              <span className={styles.date}>28.06.2010</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum at amet quis veritatis excepturi eum, quas perspiciatis aliquid tempore ad ex doloremque! Optio, assumenda cupiditate doloribus nobis itaque corporis delectus?
            </p>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum at amet quis veritatis excepturi eum, quas perspiciatis aliquid tempore ad ex doloremque! Optio, assumenda cupiditate doloribus nobis itaque corporis delectus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum at amet quis veritatis excepturi eum, quas perspiciatis aliquid tempore ad ex doloremque! Optio, assumenda cupiditate doloribus nobis itaque corporis delectus?
            </p>
          </div>
          <div className={styles.comments}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Ashanur here!</b> Share your knowledge and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dicta</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea placeat voluptatem doloremque, labore a id voluptate ratione ullam alias perferendis, et at culpa consectetur tenetur ab quia voluptatibus! Necessitatibus, corporis. Facere dignissimos corrupti perferendis totam! Dolorem voluptatum saepe quam quo distinctio quidem accusamus aliquid magnam exercitationem quas, molestias quia magni dolores, fugiat sed voluptate. Similique neque ab dolorem. Ipsum, expedita.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
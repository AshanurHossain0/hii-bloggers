import React from 'react'
import styles from "./categoryList.module.css";
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
          <Image src="/style.png" alt="food" width={32} height={32} className={styles.image} />
          food
        </Link>
        <Link href="/blog?cat=health" className={`${styles.category} ${styles.health}`}>
          <Image src="/style.png" alt="health" width={32} height={32} className={styles.image} />
          health
        </Link>
        <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
          <Image src="/style.png" alt="fashion" width={32} height={32} className={styles.image} />
          fashion
        </Link>
        <Link href="/blog?cat=arts" className={`${styles.category} ${styles.arts}`}>
          <Image src="/style.png" alt="arts" width={32} height={32} className={styles.image} />
          arts
        </Link>
        <Link href="/blog?cat=science" className={`${styles.category} ${styles.science}`}>
          <Image src="/style.png" alt="science" width={32} height={32} className={styles.image} />
          science
        </Link>
        <Link href="/blog?cat=tech" className={`${styles.category} ${styles.tech}`}>
          <Image src="/style.png" alt="tech" width={32} height={32} className={styles.image} />
          tech
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
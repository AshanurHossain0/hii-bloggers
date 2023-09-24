import React from 'react'
import styles from "./menuCategories.module.css"
import Link from 'next/link'

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link href="/blog?cat=arts" className={`${styles.categoryItem} ${styles.food}`}>
                Food
            </Link>
            <Link href="/blog?cat=arts" className={`${styles.categoryItem} ${styles.health}`}>
                Health
            </Link>
            <Link href="/blog?cat=arts" className={`${styles.categoryItem} ${styles.fashion}`}>
                Fashion
            </Link>
            <Link href="/blog?cat=arts" className={`${styles.categoryItem} ${styles.arts}`}>
                Arts
            </Link>
            <Link href="/blog?cat=arts" className={`${styles.categoryItem} ${styles.science}`}>
                Science
            </Link>
            <Link href="/blog?cat=arts" className={`${styles.categoryItem} ${styles.tech}`}>
                Tech
            </Link>
        </div>
    )
}

export default MenuCategories
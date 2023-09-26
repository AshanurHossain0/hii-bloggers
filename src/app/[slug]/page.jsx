import React from 'react'
import styles from "./singlePage.module.css";

const SinglePage = ({params}) => {
  return (
    <div className={styles.container}>
      {params.slug}
    </div>
  )
}

export default SinglePage
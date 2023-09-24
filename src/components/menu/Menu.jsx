import React from 'react'
import styles from "./menu.module.css";
import Menuposts from '../menuposts/Menuposts';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <Menuposts withImage={false}/>
      {/* second portion */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>
      {/* third portion */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <Menuposts withImage={true}/>
    </div>
  )
}

export default Menu
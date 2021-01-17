import React from 'react';
import styles from './ListItem.module.scss';

import arrow from '../../assets/images/icon-arrow-down.svg';

const ListItem = () => {
  return (
    <li className={styles.listItem}>
      <details className={styles.listItem__details}>
        <summary className={styles.listItem__question}>How many members can I invite?
        <div className={styles.listItem__arrow}><img src={arrow} alt="arrow" /></div>
        </summary>
        <p className={styles.listItem__answer}>As much as you want</p>
      </details>
    </li>
  )
};

export default ListItem;
import React from 'react';
import styles from './ListItem.module.scss';

const ListItem = () => {
  return (
    <li className={styles.listItem}>
      <details>
        <summary className={styles.listItem__question}>How many members can I invite?</summary>
        <p className={styles.listItem__answer}>As much as you want</p>
      </details>
    </li>
  )
};

export default ListItem;
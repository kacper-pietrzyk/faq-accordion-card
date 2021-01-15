import React from 'react';
import styles from './List.module.scss';

const List = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <details>
          <summary>How many members can I invite?</summary>
          <p>As much as you want</p>
        </details>
      </li>
      <li className={styles.listItem}>
        <details>
          <summary>What is the file upload size?</summary>
          <p>No more than 2GB. All files in your account must fit your allotted storage space</p>
        </details>
      </li>
      <li className={styles.listItem}>
        <details>
          <summary>How many members can I invite?</summary>
          <p>As much as you want</p>
        </details>
      </li>
      <li className={styles.listItem}>
        <details>
          <summary>What is the file upload size?</summary>
          <p>No more than 2GB. All files in your account must fit your allotted storage space</p>
        </details>
      </li>
    </ul>
  )
};

export default List;
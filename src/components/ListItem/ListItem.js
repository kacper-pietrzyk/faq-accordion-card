import React from 'react';
import styles from './ListItem.module.scss';

import arrow from '../../assets/images/icon-arrow-down.svg';

const ListItem = ({ question, answer }) => {
  return (
    <li className={styles.listItem}>
      <details className={styles.listItem__details}>
        <summary className={styles.listItem__question}>
          {question}
          <div className={styles.listItem__arrow}>
            <img src={arrow} alt="arrow" />
          </div>
        </summary>
        <p className={styles.listItem__answer}>
          {answer}
        </p>
      </details>
    </li>
  )
};

export default ListItem;
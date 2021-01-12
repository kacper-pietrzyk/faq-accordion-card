import React from 'react';
import styles from './App.module.scss';

import image from '../../assets/images/illustration-woman-online-mobile.svg';
import shadowOfImage from '../../assets/images/bg-pattern-mobile.svg';

const App = () => {

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.images}>
          <img className={styles.images__mainImage} src={image} alt="online technologies" />
          <img className={styles.images__shadowImage} src={shadowOfImage} alt="shadow" />
        </div>
        <h1 className={styles.headline}>FAQ</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <details>
              <summary>How many team members can I invite?</summary>
              <p>As much as you want</p>
            </details>
          </li>
          <li className={styles.listItem}>
            <details>
              <summary>What is the maximum file upload size?</summary>
              <p>No more than 2GB. All files in your account must fit your allotted storage space</p>
            </details>
          </li>
          <li className={styles.listItem}>
            <details>
              <summary>How many team members can I invite?</summary>
              <p>As much as you want</p>
            </details>
          </li>
          <li className={styles.listItem}>
            <details>
              <summary>What is the maximum file upload size?</summary>
              <p>No more than 2GB. All files in your account must fit your allotted storage space</p>
            </details>
          </li>
        </ul>
      </div>
    </>
  )
};

export default App;

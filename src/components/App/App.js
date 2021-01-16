import React from 'react';
import styles from './App.module.scss';

import List from '../List/List';

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
        <List />
      </div>
    </>
  )
};

export default App;

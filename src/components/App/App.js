import React from 'react';
import styles from './App.module.scss';

import List from '../List/List';
import useWindowWidth from './useWindowWidth';

import mobileImage from '../../assets/images/illustration-woman-online-mobile.svg';
import desktopImage from '../../assets/images/illustration-woman-online-desktop.svg';
import desktopBoxImage from '../../assets/images/illustration-box-desktop.svg';
import mobileShadowOfImage from '../../assets/images/bg-pattern-mobile.svg';
import desktopShadowOfImage from '../../assets/images/bg-pattern-desktop.svg';

const App = () => {

  const windowWidth = useWindowWidth();
  const imageSrc = windowWidth < 1024 ? mobileImage : desktopImage;
  const shadowOfImageSrc = windowWidth < 1024 ? mobileShadowOfImage : desktopShadowOfImage;

  return (
    <div className={styles.wrapper}>
      <div className={styles.images}>
        <img
          className={styles.images__mainImage}
          src={imageSrc}
          alt="online technologies" />
        <img
          className={styles.images__shadowImage}
          src={shadowOfImageSrc}
          alt="shadow" />
        {windowWidth >= 1024 &&
          <img
            className={styles.images__boxImage}
            src={desktopBoxImage}
            alt="box" />}
      </div>
      <main>
        <h1 className={styles.headline}>FAQ</h1>
        <List />
      </main>
    </div>
  )
};
export default App;
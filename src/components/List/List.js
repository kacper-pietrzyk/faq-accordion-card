import React from 'react';
import styles from './List.module.scss';

import ListItem from '../ListItem/ListItem';

const List = () => {
  return (
    <ul className={styles.list}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  )
};

export default List;
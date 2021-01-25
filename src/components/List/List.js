import React, { useState, useEffect } from 'react';
import styles from './List.module.scss';

import ListItem from '../ListItem/ListItem';

const List = () => {

  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const url = "https://www.json-generator.com/api/json/get/bVpOOFOEky?indent=2";
    fetch(url)
      .then(response => response.json())
      .then(result => setFaq(result.faq))
      .catch(err => console.log(`błąd: ${err}`))
  }, []);

  const dataList = faq.map(data => (
    <ListItem
      key={data.id}
      question={data.question}
      answer={data.answer}
    />
  ))

  return (
    <ul className={styles.list}>
      {dataList}
    </ul>
  )
};

export default List;
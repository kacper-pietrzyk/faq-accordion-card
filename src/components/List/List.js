import React, { useState, useEffect } from 'react';
import styles from './List.module.scss';

import ListItem from '../ListItem/ListItem';

const List = () => {

  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const url = "https://api.json-generator.com/templates/Z4QpUYmz4r9Q/data?access_token=i9i2ump0kzrk14xfg6h7gwvxseudmbpscyfeh6qh";
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

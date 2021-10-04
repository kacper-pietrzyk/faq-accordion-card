import React, { useState, useEffect } from 'react';
import styles from './List.module.scss';

import ListItem from '../ListItem/ListItem';

const List = () => {

  const [faq, setFaq] = useState([]);

  useEffect(() => {
    // const url = "https://glacial-anchorage-04547.herokuapp.com/https://api.json-generator.com/templates/W5spbkRAVOIp/data?access_token=i9i2ump0kzrk14xfg6h7gwvxseudmbpscyfeh6qh";
    const url = "https://glacial-anchorage-04547.herokuapp.com/https://api.json-generator.com/templates/W5spbkRAVOIp/data";
    fetch(url, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer i9i2ump0kzrk14xfg6h7gwvxseudmbpscyfeh6qh",
        requireHeader: ['origin', 'x-requested-with'],
      }
    })
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

import React, { useState } from 'react';
import styles from './List.module.scss';

import ListItem from '../ListItem/ListItem';

const List = () => {

  const [content, setContent] = useState([]);

  const functionToSetContent = () => {
    const url = "http://www.json-generator.com/api/json/get/bVpOOFOEky?indent=2";
    fetch(url)
      .then(response => response.json())
      .then(result => setContent(result.faq))
      .catch(err => console.log(`błąd: ${err}`))
  }

  const data = content.map(data => (
    <ListItem
      key={data.id}
      question={data.question}
      answer={data.answer}
    />
  ))

  return (
    <ul className={styles.list} onMouseDown={functionToSetContent}>
      {data}
      <li>coś</li>
    </ul>
  )
};

export default List;
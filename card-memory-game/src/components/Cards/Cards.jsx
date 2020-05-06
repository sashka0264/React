import React from 'react';
import styles from "./Cards.module.scss";

const Cards = ({ gridMap, cardClicked }) => {
  return <div className={styles.cards}>
    {gridMap.map((item) => {
      return (
        <div 
          className={styles.card} 
          key={item.id} 
          id={item.id}
          style={{backgroundColor: item.opened ? item.color : 'orange' }}
          onClick={() => cardClicked(item.id, item.color)}
        >
          {item.opened ? '' : '?'}
        </div>
      )
    })}
  </div>
}

export default Cards;
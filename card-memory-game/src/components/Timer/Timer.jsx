import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import styles from "./Timer.module.scss";

const Timer = ({ gridMap, initialized }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (initialized && gridMap.length > 2) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
  }, [initialized, time])

  return <div className={styles.timer}>
    <Button aria-controls="simple-menu" aria-haspopup="true">
      {
        gridMap.length ? `Time of your game: ${time} s` : `Сongratulations to you! You won in ${time} s`
      }
    </Button>
  </div>
}

export default Timer;
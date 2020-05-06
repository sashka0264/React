import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from "./Settings.module.scss";

const Settings = ({ maxGrids, initializeAC }) => {
  const [grid, setGrid] = useState({ error: false, helperText: '', value: '' });

  const setGridValue = ({ target: { value } }) => {
    if (!isNaN(value)) {
      setGrid({...grid, value: +value});
    }
  }

  const startGame = () => {
    if (grid.value > maxGrids ) {
      setGrid({...grid, error: true, helperText: `max ${maxGrids}`});
    } else if (grid.value < 2) {
      setGrid({...grid, error: true, helperText: 'min 2'});
    } else if (grid.value % 2 !== 0) {
      setGrid({...grid, error: true, helperText: 'odd number'});
    } else {
      setGrid({...grid, error: false, helperText: ''});
      initializeAC(grid.value);
    }
  }

  return (
    <div className={styles.settings}>
      <h3>Welcome to Card Memory Game!</h3>

      <img 
        src="https://cdn.dribbble.com/users/218750/screenshots/2090988/sleeping_beauty.gif" 
        alt="cat" 
        className={styles.image}
      />

      <TextField 
        error={grid.error} 
        helperText={grid.helperText} 
        id="standard-basic" 
        label="Grid size (n x n, max 10)" 
        value={grid.value}
        onChange={setGridValue}
      />

      <div className={styles.start}>
        <Button variant="outlined" color="secondary" onClick={startGame}>
          Start Game
        </Button>
      </div>
    </div>
  )
}

export default Settings;
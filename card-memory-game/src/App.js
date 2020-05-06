import React, { useState } from 'react';
import { Provider, connect } from 'react-redux';
import { initializeAC as initialize, openCardAC as openCard } from './redux/actions';
import store from './redux/store'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from "./App.module.scss";

const Settings = ({ maxGrids, initializeAC }) => {
  initializeAC(10);
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
    } else {
      setGrid({...grid, error: false, helperText: ''});
      initializeAC(grid.value);
    }
  }

  return (
    <div className={styles.settings}>
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

const AppContainer = () => (
  <Provider store={store}>
    <AppWithState />
  </Provider>
);

const App = ({ initialized, initialize, openCard, maxGrids, gridMap }) => {
  
  if (!initialized) {
    return <Settings maxGrids={maxGrids} initializeAC={initialize} />
  }

  const cardClicked = (id, color) => {
    openCard(id, color)
  }
  
  return (
    <div className={styles.app}>
      <div className={styles.cards}>

      
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
    </div>
  );
}

const mapStateToProps = ({ initialized, maxGrids, gridMap }) => ({
  initialized,
  maxGrids,
  gridMap
});

const AppWithState = connect(mapStateToProps, { initialize, openCard })(App)


export default AppContainer;

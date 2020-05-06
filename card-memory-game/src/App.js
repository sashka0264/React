import React from 'react';
import { Provider, connect } from 'react-redux';
import { initializeAC as initialize, openCardAC as openCard, restartAC as restart } from './redux/actions';
import store from './redux/store'
import Settings from './components/Settings/Settings';
import Cards from './components/Cards/Cards';
import Timer from './components/Timer/Timer';
import Button from '@material-ui/core/Button';
import styles from "./App.module.scss";

const AppContainer = () => (
  <Provider store={store}>
    <AppWithState />
  </Provider>
);

const App = ({ initialized, initialize, openCard, maxGrids, gridMap, lastCard, restart }) => {

  if (!initialized) return <Settings maxGrids={maxGrids} initializeAC={initialize} />

  const cardClicked = (id, color) => {
    if (lastCard.id !== id) openCard(id, color)
  }
  
  return (
    <div className={styles.app}>
      <Timer gridMap={gridMap} initialized={initialized} />
      <Cards cardClicked={cardClicked} gridMap={gridMap} />
      {!gridMap.length ? <Button onClick={restart}>Restart</Button> : null}
    </div>
  );
}

const mapStateToProps = ({ initialized, maxGrids, gridMap, lastCard }) => ({
  initialized,
  maxGrids,
  gridMap,
  lastCard
});

const AppWithState = connect(mapStateToProps, { initialize, openCard, restart })(App)

export default AppContainer;

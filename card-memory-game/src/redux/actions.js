
export const INITIALIZE = 'INITIALIZE',
  OPEN_CARD = 'OPEN-CARD',
  RESTART = 'RESTART';

export const initializeAC = (useGrids) => ({ type: INITIALIZE, useGrids }),
  openCardAC = (id, color) => ({ type: OPEN_CARD, id, color }),
  restartAC = () => ({ type: RESTART });
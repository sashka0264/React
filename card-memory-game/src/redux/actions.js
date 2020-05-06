
export const INITIALIZE = 'INITIALIZE',
  OPEN_CARD = 'OPEN-CARD';

export const initializeAC = (useGrids) => ({ type: INITIALIZE, useGrids }),
  openCardAC = (id, color) => ({ type: OPEN_CARD, id, color });
import {
  INITIALIZE,
  OPEN_CARD,
  RESTART
} from './actions';

export const initialState = {
  initialized: false,
  maxGrids: 10,
  gridMap: null,
  lastCard: {
    id: null,
    color: null
  }
};

const reducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case INITIALIZE: 
      const colorsGenerator = (amount) => { // amount = (кол-во карточек) / 2
        const arr = [];
        const randomColor = () => {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          if (!arr.includes(color)) arr.push(color);
          if (arr.length < amount) randomColor();
        }
        randomColor();
        return [...arr, ...arr].sort(() => Math.random() - 0.5);
      }

      const colors = colorsGenerator( (action.useGrids ** 2) / 2);

      const map = [];
      for (let i = 1; i <= action.useGrids ** 2; i += 1) {
        map.push({ id: `grid${i}`, opened: false, color: colors[i-1]})
      }

      return {
        ...state,
        initialized: true,
        gridMap: map
      }
    case OPEN_CARD: 
      let newLastCard = {
        id: action.id,
        color: action.color
      }

      let newGridMap = state.gridMap
        .map((item) => {
          if (item.opened && item.id !== action.id) return {...item, opened: false}
          if (item.id === action.id && !state.lastCard.id && !state.lastCard.color) return {...item, opened: true}
          return item;
        });
        
      if (action.color === state.lastCard.color) newGridMap = newGridMap.filter((item) => item.color !== action.color);
    
      if (state.lastCard.id && state.lastCard.color) {
        newLastCard.id = null;
        newLastCard.color = null;
      }
      
      return {
        ...state,
        gridMap: newGridMap,
        lastCard: newLastCard
      }
    case RESTART:
      return {
        ...state,
        initialized: false,
        gridMap: null,
        lastCard: {
          id: null,
          color: null
        }
      }
    default: 
      return state;
  }
};

export default reducer;


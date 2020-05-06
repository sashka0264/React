import {
  INITIALIZE,
  OPEN_CARD
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
      const newGridMap = state.gridMap
        .map((item) => {
          if (item.opened && item.id !== action.id) return {...item, opened: false}
          if (item.id === action.id) return {...item,opened: true}
          return item;
        });
      


      return {
        ...state,
        gridMap: newGridMap,
        lastCard: {
          id: action.id,
          color: action.color
        }
      }
    default: 
      return state;
  }
};

export default reducer;


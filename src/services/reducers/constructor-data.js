import { CONSTRUCTOR_ORDER, DELETE_ITEM, ADD_ITEM, ADD_ITEM_PROPERTIES, CONSTRUCTOR_ORDER_SORT } 
from '../actions/constructor-data';

const initialState = {
  order: [],
  sortOrder: []
};

let index = 15
let bun 

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTRUCTOR_ORDER: {
      return {
        ...state,
        order: [...action.value].map((el, i) => {
          if(el.name !== 'Краторная булка N-200i' && el.type === 'bun'){
            bun = el
            el.qty = 2
          } else if (el.name === 'Краторная булка N-200i') {
            el.qty = 2
          } else {
            el.qty = 1
          }
          el.index = i
          return el
        }).filter(el => el.name !== 'Краторная булка N-200i')
      };
    }
    case CONSTRUCTOR_ORDER_SORT: {
      return {
        ...state,
        sortOrder: [...action.value]
      };
    }
    case DELETE_ITEM: {     
      return {
        ...state,
        order: [...state.order].map(el => {
          if(el._id === action.id){
          if( el.qty != 0 ){
            el.qty -= 1
          } else {
            el.qty = 0
          }
          }
          return el
        }).filter(el => el.index !== action.index)
      };
    }
  case ADD_ITEM_PROPERTIES: {
      return {
        ...state,
        order: [...state.order].reduce((acc, el) => {
          if(el.type === 'bun'){
              bun = el
        } else {
          acc.push(el)     
        }
          return acc
      }, []).map(el =>  el._id === action.ingredient._id ? {...el, qty: el.type === 'bun' ? el.qty : el.qty++ } && { ...el, index: ++index} : el)
    }
  }

    case ADD_ITEM: {
     return {
        ...state,
        order: action.ingredient.type === 'bun' ? [...state.order, action.ingredient] : [...state.order, action.ingredient, bun]
      };
      };
    default: {
      return state;
    }
  }
};
//
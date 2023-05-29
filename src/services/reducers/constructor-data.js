import { DELETE_ITEM, ADD_ITEM, ADD_ITEM_PROPERTIES, CONSTRUCTOR_ORDER_SORT, GET_CONSTRUCTOR_INGREDIENTS_REQUEST, 
GET_CONSTRUCTOR_INGREDIENTS_SUCCESS, GET_CONSTRUCTOR_INGREDIENTS_FAILED, BUN } from '../actions/constructor-data';


const initialState = {
  data: [],
  error: false,
  loading: false,
  order: [],
  sortOrder: [],
  dragIngredient: {}
};

let bunCheking =false

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONSTRUCTOR_INGREDIENTS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_CONSTRUCTOR_INGREDIENTS_SUCCESS: {
      return { ...state, error: false, data: action.data.map(el => {
        el.qty = 0
        return el
      }), loading: false };
    }
    case GET_CONSTRUCTOR_INGREDIENTS_FAILED: {
      return { ...state, error: true, loading: false };
    }
    case CONSTRUCTOR_ORDER_SORT: {
      return {
        ...state,
        sortOrder: [...action.value]
      };
    }
    case ADD_ITEM: {
      return {
       ...state,
       dragIngredient: action.payload,
       order: state.order ? [...state.order, action.payload] : [action.payload]
      }
    };
    case ADD_ITEM_PROPERTIES: {
        return {
         ...state,
          data: [...state.data].map(el => {
            if(el.name === state.dragIngredient.name) {
              ++el.qty
            }
            return el
          })
      }
    }
    case DELETE_ITEM: {     
      console.log(state.sortOrder)
      return {
        ...state,
        data: [...state.data].map(el =>
          el._id === action.id ? { ...el, qty: --el.qty } : el
        ),
        order: [...state.sortOrder].filter(el => el.uniqueId !== action.index)
      };
    }
    case BUN: {
      return {
       ...state,
       data: [...state.data].map(el => {
        if(el.name === action.ingredient.name){
          el.qty = 2
        } else if(el.type === 'bun'){
          el.qty = 0
        }
        return el
      }),
        order: state.order ? [...state.order].reduce((acc, el) => { 
          if(el.type !== 'bun'){
            acc.push(el)
          } else {
            bunCheking = true
            el = action.ingredient
            acc.push(el)
          }
          if(acc.length === state.order.length && !bunCheking){
            acc.push(action.ingredient)
          }
          return acc
        },[]) : [action.ingredient]
    }
  }
    default: {
      return state;
    }
  }
};

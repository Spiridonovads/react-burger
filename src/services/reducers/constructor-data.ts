import { DELETE_ITEM, ADD_ITEM, ADD_ITEM_PROPERTIES, CONSTRUCTOR_ORDER_SORT, GET_CONSTRUCTOR_INGREDIENTS_REQUEST, 
GET_CONSTRUCTOR_INGREDIENTS_SUCCESS, GET_CONSTRUCTOR_INGREDIENTS_FAILED, BUN, DELETE_CONSTRUCTOR } from '../actions/constructor-data';
import { TConstructorActions } from '../actions/constructor-data';

export type TState = {
  data: object[] ,
  error: boolean,
  loading: boolean,
  order: object[],
  sortOrder: object[],
  dragIngredient: any
}
const initialState: TState = {
  data: [],
  error: false,
  loading: false,
  order: [],
  sortOrder: [],
  dragIngredient: {}
};

let bunCheking =false

export const constructorReducer = (state = initialState, action: TConstructorActions): TState => {
  switch (action.type) {
    case GET_CONSTRUCTOR_INGREDIENTS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_CONSTRUCTOR_INGREDIENTS_SUCCESS: {
      return { ...state, error: false, data: action.data.map((el: any)=> {
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
       order: state.order ? [...state.sortOrder, action.payload] : [action.payload]
      }
    };
    case ADD_ITEM_PROPERTIES: {
        return {
         ...state,
          data: [...state.data].map((el: any) => {
            if(el.name === state.dragIngredient.name) {
              ++el.qty
            }
            return el
          })
      }
    }
    case DELETE_ITEM: {     
      return {
        ...state,
        data: [...state.data].map((el:any) =>
          el._id === action.id ? { ...el, qty: --el.qty } : el
        ),
        order: [...state.sortOrder].filter((el: any) => el.uniqueId !== action.index)
      };
    }
    case DELETE_CONSTRUCTOR: {     
      return {
        ...state, 
        order: [],
        sortOrder: [],
        data: [...state.data].map((el: any) =>
          el.qty > 0 ? { ...el, qty: 0 } : el
        )
      };
    }
    case BUN: {
      return {
       ...state,
       data: [...state.data].map((el: any) => {
        if(el.name === action.ingredient.name){
          el.qty = 2
        } else if(el.type === 'bun'){
          el.qty = 0
        }
        return el
      }),
        order: state.order && state.order?.length > 0 ? [...state.sortOrder].reduce((acc: any, el: any) => { 
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


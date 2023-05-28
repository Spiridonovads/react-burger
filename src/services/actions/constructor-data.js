import { v4 as uuid } from 'uuid';
import { getIngredientsData } from '../../utile/api';

export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_PROPERTIES = 'ADD_ITEM_PROPERTIES';
export const CONSTRUCTOR_ORDER_SORT = 'CONSTRUCTOR_ORDER_SORT';
export const GET_CONSTRUCTOR_INGREDIENTS_REQUEST = 'GET_CONSTRUCTOR_INGREDIENTS_REQUEST';
export const GET_CONSTRUCTOR_INGREDIENTS_SUCCESS = 'GET_CONSTRUCTOR_INGREDIENTS_SUCCESS';
export const GET_CONSTRUCTOR_INGREDIENTS_FAILED = 'GET_CONSTRUCTOR_INGREDIENTS_FAILED';
export const BUN = 'BUN';

export function getConstructorIngredients() {
  return function(dispatch) {
    dispatch({
      type: GET_CONSTRUCTOR_INGREDIENTS_REQUEST
    });
    getIngredientsData()
    .then(data => dispatch({
      type: GET_CONSTRUCTOR_INGREDIENTS_SUCCESS,
      data: data.data
    }))
		.catch(() =>  dispatch({
      type: GET_CONSTRUCTOR_INGREDIENTS_FAILED
    }))
    };
  };

export const addIngridient = (item) => {
	return function(dispatch) {
    dispatch({
      type: ADD_ITEM,
			payload: {
				...item, 
			 uniqueId: uuid(),
		}
    });
    };
}







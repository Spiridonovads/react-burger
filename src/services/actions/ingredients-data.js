import { getIngredientsData } from "../../utile/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENT_INFO = 'GET_INGREDIENT_INFO';
export const SET_MODAL_STATE = 'SET_MODAL_STATE';

export function getIngredients() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });
    getIngredientsData()
    .then(data => dispatch({
      type: GET_INGREDIENTS_SUCCESS,
      data: data.data
    }))
		.catch(() =>  dispatch({
      type: GET_INGREDIENTS_FAILED
    }))
    };
  };

 
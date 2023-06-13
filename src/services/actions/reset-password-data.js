import { getResetPasswordData } from "../../utile/api";

export const GET_RESET_REQUEST = 'GET_RESET_REQUEST';
export const GET_RESET_SUCCESS = 'GET_RESET_SUCCESS';
export const GET_RESET_FAILED = 'GET_RESET_FAILED';

export function getReset(form) {
  return function(dispatch) {
    dispatch({
      type: GET_RESET_REQUEST
    });
    getResetPasswordData(form)
    .then(data => dispatch({
      type: GET_RESET_SUCCESS,
      data: data
    }))
		.catch(() =>  dispatch({
      type: GET_RESET_FAILED
    }))
    };
  };

 
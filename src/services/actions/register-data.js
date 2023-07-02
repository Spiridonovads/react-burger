import { getRegistrationData } from "../../utile/api";

export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAILED = 'GET_REGISTER_FAILED';
export const DELETE_REGISTER = 'DELETE_REGISTER';

export function getRegister(form) {
  return function(dispatch) {
    dispatch({
      type: GET_REGISTER_REQUEST
    });
    getRegistrationData(form)
    .then(data => dispatch({
      type: GET_REGISTER_SUCCESS,
      data: data
    }))
		.catch(() =>  dispatch({
      type: GET_REGISTER_FAILED
    }))
    };
  };

 
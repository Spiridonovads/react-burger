import { getForgotPasswordData } from "../../utile/api";

export const GET_FORGOT_REQUEST = 'GET_FORGOT_REQUEST';
export const GET_FORGOT_SUCCESS = 'GET_FORGOT_SUCCESS';
export const GET_FORGOT_FAILED = 'GET_FORGOT_FAILED';

export function getForgot(form) {
  return function(dispatch) {
    dispatch({
      type: GET_FORGOT_REQUEST
    });
    getForgotPasswordData(form)
    .then(data => dispatch({
      type: GET_FORGOT_SUCCESS,
      data: data
    }))
		.catch(() =>  dispatch({
      type: GET_FORGOT_FAILED
    }))
    };
  };

 
import { getLoginData } from "../../utile/api";
import { setCookie } from "../../utile/cookie";

export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILED = 'GET_LOGIN_FAILED';

export function getLogin(form) {
  return function(dispatch) {
    dispatch({
      type: GET_LOGIN_REQUEST
    });
    getLoginData(form)
    .then(data => dispatch({
      type: GET_LOGIN_SUCCESS,
      data: data
    }))
    .then(data => {
      setCookie('refreshToken', data.data.refreshToken)
      setCookie('accessToken', data.data.accessToken.split('Bearer ')[1]/*, 1200*/)
    })
		.catch(() =>  dispatch({
      type: GET_LOGIN_FAILED
    }))
    };
  };

 
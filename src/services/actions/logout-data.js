import { getLogoutData } from "../../utile/api";
import { deleteCookie } from '../../utile/cookie';

export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST';
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';
export const GET_LOGOUT_FAILED = 'GET_LOGOUT_FAILED';

export function getLogout() {
  return function(dispatch) {
    dispatch({
      type: GET_LOGOUT_REQUEST
    });
    getLogoutData()
    .then(data => dispatch({
      type: GET_LOGOUT_SUCCESS,
      data: data
    }))
    .then(() => {
      deleteCookie('accessToken');
			deleteCookie('refreshToken');  
    }
    )
		.catch(() =>  dispatch({
      type: GET_LOGOUT_FAILED
    }))
    };
  };
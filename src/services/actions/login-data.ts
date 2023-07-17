import { getLoginData } from "../../utile/api";
import { setCookie } from "../../utile/cookie";

export const GET_LOGIN_REQUEST: 'GET_LOGIN_REQUEST' = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS: 'GET_LOGIN_SUCCESS' = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILED: 'GET_LOGIN_FAILED' = 'GET_LOGIN_FAILED';
export const DELETE_LOGIN: 'DELETE_LOGIN' = 'DELETE_LOGIN';

export interface IGetLoginRequest {
  readonly type: typeof GET_LOGIN_REQUEST
}
export const getLoginRequest = (): IGetLoginRequest => ({
  type: GET_LOGIN_REQUEST
})

export interface IGetLoginSuccess {
  readonly type: typeof GET_LOGIN_SUCCESS;
  readonly data: object
}
export const getLoginSuccess = (data: object): IGetLoginSuccess => ({
  type: GET_LOGIN_SUCCESS,
  data: data
})

export interface IGetLoginFailed {
  readonly type: typeof GET_LOGIN_FAILED
}
export const getLoginFailed = (): IGetLoginFailed => ({
  type: GET_LOGIN_FAILED
})

export interface IDeleteLogin {
  readonly type: typeof DELETE_LOGIN
}
export const deleteLogin = (): IDeleteLogin => ({
  type: DELETE_LOGIN
})

export type TLoginActions = 
|IGetLoginRequest
|IGetLoginSuccess
|IGetLoginFailed
|IDeleteLogin

export function getLogin(form: {email: string, password: string}) {
  return function(dispatch: any) {
    dispatch(getLoginRequest());
    getLoginData(form)
    .then(data => {
      dispatch(getLoginSuccess(data))
      setCookie('refreshToken', data.refreshToken)
      setCookie('accessToken', data.accessToken.split('Bearer ')[1])
      
    })
		.catch(() => dispatch(getLoginFailed))
    };
  };

 
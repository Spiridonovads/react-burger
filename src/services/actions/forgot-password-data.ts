import { getForgotPasswordData } from "../../utile/api";
import { AppDispatch } from "../types/types";

export const GET_FORGOT_REQUEST:'GET_FORGOT_REQUEST' = 'GET_FORGOT_REQUEST';
export const GET_FORGOT_SUCCESS: 'GET_FORGOT_SUCCESS' = 'GET_FORGOT_SUCCESS';
export const GET_FORGOT_FAILED: 'GET_FORGOT_FAILED' = 'GET_FORGOT_FAILED';
export const DELETE_FORGOT: 'DELETE_FORGOT' = 'DELETE_FORGOT';

export interface IGetForgotRequest {
  readonly type: typeof GET_FORGOT_REQUEST
}
export const getForgotRequest = (): IGetForgotRequest => ({
  type: GET_FORGOT_REQUEST 
})

export interface IGetForgotSuccess {
  readonly type: typeof GET_FORGOT_SUCCESS;
  readonly data: object
}
export const getForgotSuccess = (data: object): IGetForgotSuccess => ({
  type: GET_FORGOT_SUCCESS,
  data: data
})

export interface IGetForgotFailed {
  readonly type: typeof GET_FORGOT_FAILED
}
export const getForgotFailed = (): IGetForgotFailed => ({
  type: GET_FORGOT_FAILED
})

export interface IDeleteForgot {
  readonly type: typeof DELETE_FORGOT
}
export const deleteForgot = (): IDeleteForgot => ({
  type: DELETE_FORGOT
})

export type TForgotPasswordActions = 
|IGetForgotRequest
|IGetForgotSuccess
|IGetForgotFailed
|IDeleteForgot

export function getForgot(form: {email: string}) {
  return function(dispatch: AppDispatch) {
    dispatch(getForgotRequest());
    getForgotPasswordData(form)
    .then(data => dispatch(getForgotSuccess(data)))
		.catch(() =>  dispatch(getForgotFailed()))
    };
  };

 
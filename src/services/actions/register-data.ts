import { getRegistrationData } from "../../utile/api";
import { AppDispatch } from "../types/types";

export const GET_REGISTER_REQUEST: 'GET_REGISTER_REQUEST' = 'GET_REGISTER_REQUEST';
export const GET_REGISTER_SUCCESS: 'GET_REGISTER_SUCCESS' = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAILED: 'GET_REGISTER_FAILED' = 'GET_REGISTER_FAILED';
export const DELETE_REGISTER: 'DELETE_REGISTER' = 'DELETE_REGISTER';

export interface IGetRegisterRequest {
  readonly type: typeof GET_REGISTER_REQUEST
}
export const getRegisterRequest = (): IGetRegisterRequest => ({
  type: GET_REGISTER_REQUEST
})

export interface IGetRegisterSuccess {
  readonly type: typeof GET_REGISTER_SUCCESS;
  readonly data: object
}
export const getRegisterSuccess = (data: object): IGetRegisterSuccess => ({
  type: GET_REGISTER_SUCCESS,
  data: data
})

export interface IGetRegisterFailed {
  readonly type: typeof GET_REGISTER_FAILED
}
export const getRegisterFailed = (): IGetRegisterFailed => ({
  type: GET_REGISTER_FAILED
})

export interface IDeleteRegister {
  readonly type: typeof DELETE_REGISTER
}
export const deleteRegister = (): IDeleteRegister => ({
  type: DELETE_REGISTER
})

export type TRegisterActions = 
|IGetRegisterRequest
|IGetRegisterSuccess
|IGetRegisterFailed
|IDeleteRegister

export function getRegister(form: {email: string, password: string, name: string}) {
  return function(dispatch: AppDispatch) {
    dispatch(getRegisterRequest());
    getRegistrationData(form)
    .then(data => dispatch(getRegisterSuccess(data)))
		.catch(() =>  dispatch(getRegisterFailed()))
    };
  };

 
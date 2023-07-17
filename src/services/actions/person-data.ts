import { getPersonData } from "../../utile/api";
import { getChangePersonData } from "../../utile/api";
import { getUpdateTokenData } from "../../utile/api";
import { setCookie } from "../../utile/cookie";
import { AppDispatch } from "../types/types";

export const GET_PERSON_REQUEST: 'GET_PERSON_REQUEST' = 'GET_PERSON_REQUEST';
export const GET_PERSON_SUCCESS: 'GET_PERSON_SUCCESS' = 'GET_PERSON_SUCCESS';
export const GET_PERSON_FAILED: 'GET_PERSON_FAILED' = 'GET_PERSON_FAILED';
export const GET_CHANGE_PERSON_REQUEST: 'GET_CHANGE_PERSON_REQUEST' = 'GET_CHANGE_PERSON_REQUEST';
export const GET_CHANGE_PERSON_SUCCESS: 'GET_CHANGE_PERSON_SUCCESS' = 'GET_CHANGE_PERSON_SUCCESS';
export const GET_CHANGE_PERSON_FAILED: 'GET_CHANGE_PERSON_FAILED' = 'GET_CHANGE_PERSON_FAILED';
export const DELETE_PERSON: 'DELETE_PERSON' = 'DELETE_PERSON';

export interface IGetPersonRequest {
  readonly type: typeof GET_PERSON_REQUEST
}
export const getPersonRequest = (): IGetPersonRequest => ({
  type: GET_PERSON_REQUEST
})

export interface IGetPersonSuccess {
  readonly type: typeof GET_PERSON_SUCCESS;
  readonly data: object
}
export const getPersonSuccess = (data: object): IGetPersonSuccess => ({
  type: GET_PERSON_SUCCESS,
  data: data
})

export interface IGetPersonFailed {
  readonly type: typeof GET_PERSON_FAILED
}
export const getPersonFailed = (): IGetPersonFailed => ({
  type: GET_PERSON_FAILED
})

export interface IGetChangePersonRequest {
  readonly type: typeof GET_CHANGE_PERSON_REQUEST
}
export const getChangePersonRequest = (): IGetChangePersonRequest => ({
  type: GET_CHANGE_PERSON_REQUEST
})

export interface IGetChangePersonSuccess {
  readonly type: typeof GET_CHANGE_PERSON_SUCCESS;
  readonly data: object
}
export const getChangePersonSuccess = (data: object): IGetChangePersonSuccess => ({
  type: GET_CHANGE_PERSON_SUCCESS,
  data: data
})

export interface IGetChangePersonFailed {
  readonly type: typeof GET_CHANGE_PERSON_FAILED
}
export const getChangePersonFailed = (): IGetChangePersonFailed => ({
  type: GET_CHANGE_PERSON_FAILED
})

export interface IDeletePerson {
  readonly type: typeof DELETE_PERSON
}
export const deletePerson = (): IDeletePerson => ({
  type: DELETE_PERSON
})

export type TPersonActions = 
|IGetPersonRequest
|IGetPersonSuccess
|IGetPersonFailed
|IGetChangePersonRequest
|IGetChangePersonSuccess
|IGetChangePersonFailed
|IDeletePerson

export function getPerson() {
  return function(dispatch: AppDispatch) {
    dispatch(getPersonRequest());
    getPersonData()
    .then(data => dispatch(getPersonSuccess(data)))
		.catch((err) => {
      if(err.message === 'jwt expired'){
        getUpdateTokenData()
        .then(data => {
          setCookie('refreshToken', data.data.refreshToken)
          setCookie('accessToken', data.data.accessToken.split('Bearer ')[1])
        })
      } else {
        dispatch(getPersonFailed())
      }
    })
    };
  };

export function getChangePerson(form: {name: string}) {
  return function(dispatch: AppDispatch) {
    dispatch(getChangePersonRequest());
    getChangePersonData(form)
    .then(data => dispatch(getChangePersonSuccess(data)))
		.catch(() =>  dispatch(getChangePersonFailed()))
    };
  };
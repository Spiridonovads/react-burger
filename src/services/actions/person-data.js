import { getPersonData } from "../../utile/api";
import { getChangePersonData } from "../../utile/api";
import { getUpdateTokenData } from "../../utile/api";
import { setCookie } from "../../utile/cookie";

export const GET_PERSON_REQUEST = 'GET_PERSON_REQUEST';
export const GET_PERSON_SUCCESS = 'GET_PERSON_SUCCESS';
export const GET_PERSON_FAILED = 'GET_PERSON_FAILED';
export const GET_CHANGE_PERSON_REQUEST = 'GET_CHANGE_PERSON_REQUEST';
export const GET_CHANGE_PERSON_SUCCESS = 'GET_CHANGE_PERSON_SUCCESS';
export const GET_CHANGE_PERSON_FAILED = 'GET_CHANGE_PERSON_FAILED';
export const DELETE_PERSON = 'DELETE_PERSON';

export function getPerson() {
  return function(dispatch) {
    dispatch({
      type: GET_PERSON_REQUEST
    });
    getPersonData()
    .then(data => dispatch({
      type: GET_PERSON_SUCCESS,
      data: data
    }))
		.catch((err) => {
      if(err.message === 'jwt expired'){
        getUpdateTokenData()
        .then(data => {
          setCookie('refreshToken', data.data.refreshToken)
          setCookie('accessToken', data.data.accessToken.split('Bearer ')[1], 1200)
        })
      } else {
        dispatch({
          type: GET_PERSON_FAILED
        })
      }
    })
    };
  };

export function getChangePerson(form) {
  return function(dispatch) {
    dispatch({
      type: GET_CHANGE_PERSON_REQUEST
    });
    getChangePersonData(form)
    .then(data => dispatch({
      type: GET_CHANGE_PERSON_SUCCESS,
      data: data
    }))
		.catch(() =>  dispatch({
      type: GET_CHANGE_PERSON_FAILED
    }))
    };
  };
import { getPersonData } from "../../utile/api";
import { getChangePersonData } from "../../utile/api";

export const GET_PERSON_REQUEST = 'GET_PERSON_REQUEST';
export const GET_PERSON_SUCCESS = 'GET_PERSON_SUCCESS';
export const GET_PERSON_FAILED = 'GET_PERSON_FAILED';
export const GET_CHANGE_PERSON_REQUEST = 'GET_CHANGE_PERSON_REQUEST';
export const GET_CHANGE_PERSON_SUCCESS = 'GET_CHANGE_PERSON_SUCCESS';
export const GET_CHANGE_PERSON_FAILED = 'GET_CHANGE_PERSON_FAILED';

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
		.catch(() =>  dispatch({
      type: GET_PERSON_FAILED
    }))
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
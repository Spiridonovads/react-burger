import {
  GET_PERSON_REQUEST,
  GET_PERSON_SUCCESS,
  GET_PERSON_FAILED,
  GET_CHANGE_PERSON_REQUEST,
  GET_CHANGE_PERSON_SUCCESS,
  GET_CHANGE_PERSON_FAILED,
  DELETE_PERSON,
} from "../actions/person-data";
import { TPersonActions } from "../actions/person-data";

type TState = {
  data: {success?: boolean, user?:{name: string, email: string}};
  error: boolean;
  loading: boolean;
  changeError: boolean;
  changeLoading: boolean;
};

export const initialState = {
  data: {},
  error: false,
  loading: false,
  changeError: false,
  changeLoading: false,
};

export const personReducer = (
  state = initialState,
  action: TPersonActions
): TState => {
  switch (action.type) {
    case GET_PERSON_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PERSON_SUCCESS: {
      return { ...state, error: false, data: action.data, loading: false };
    }
    case GET_PERSON_FAILED: {
      return { ...state, error: true, loading: false };
    }
    case GET_CHANGE_PERSON_REQUEST: {
      return {
        ...state,
        changeLoading: true,
      };
    }
    case GET_CHANGE_PERSON_SUCCESS: {
      return {
        ...state,
        changeError: false,
        data: action.data,
        changeLoading: false,
      };
    }
    case GET_CHANGE_PERSON_FAILED: {
      return { ...state, changeError: true, changeLoading: false };
    }
    case DELETE_PERSON: {
      return { ...state, data: {} };
    }
    default: {
      return state;
    }
  }
};

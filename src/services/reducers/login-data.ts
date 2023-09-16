import {
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILED,
  DELETE_LOGIN,
} from "../actions/login-data";
import { TLoginActions } from "../actions/login-data";

type TState = {
  data: {success?: boolean};
  error: boolean;
  loading: boolean;
};

export const initialState: TState = {
  data: {},
  error: false,
  loading: false,
};

export const loginReducer = (
  state = initialState,
  action: TLoginActions
): TState => {
  switch (action.type) {
    case GET_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_LOGIN_SUCCESS: {
      return { ...state, error: false, data: action.data, loading: false };
    }
    case GET_LOGIN_FAILED: {
      return { ...state, error: true, loading: false };
    }
    case DELETE_LOGIN: {
      return { ...state, data: {} };
    }
    default: {
      return state;
    }
  }
};

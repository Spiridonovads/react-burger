import {
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_LOGOUT_FAILED,
  DELETE_LOGOUT,
} from "../actions/logout-data";
import { TLogoutActions } from "../actions/logout-data";

type TState = {
  data: object;
  error: boolean;
  loading: boolean;
};
const initialState = {
  data: {},
  error: false,
  loading: false,
};

export const logoutReducer = (
  state = initialState,
  action: TLogoutActions
): TState => {
  switch (action.type) {
    case GET_LOGOUT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_LOGOUT_SUCCESS: {
      return { ...state, error: false, data: action.data, loading: false };
    }
    case GET_LOGOUT_FAILED: {
      return { ...state, error: true, loading: false };
    }
    case DELETE_LOGOUT: {
      return { ...state, data: [] };
    }
    default: {
      return state;
    }
  }
};

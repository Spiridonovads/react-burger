import {
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_LOGOUT_FAILED,
  DELETE_LOGOUT,
} from "../actions/logout-data";
import { TLogoutActions } from "../actions/logout-data";

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
      return { ...state, data: action.data };
    }
    case GET_LOGOUT_FAILED: {
      return { ...state, error: true};
    }
    case DELETE_LOGOUT: {
      return { ...state, data: {} };
    }
    default: {
      return state;
    }
  }
};

import {
  GET_FORGOT_REQUEST,
  GET_FORGOT_SUCCESS,
  GET_FORGOT_FAILED,
  DELETE_FORGOT,
} from "../actions/forgot-password-data";
import { TForgotPasswordActions } from "../actions/forgot-password-data";

export type TState = {
  data: object;
  error: boolean;
  loading: boolean;
};

const initialState: TState = {
  data: {},
  error: false,
  loading: false,
};

export const forgotReducer = (
  state = initialState,
  action: TForgotPasswordActions
): TState => {
  switch (action.type) {
    case GET_FORGOT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_FORGOT_SUCCESS: {
      return { ...state, error: false, data: action.data, loading: false };
    }
    case GET_FORGOT_FAILED: {
      return { ...state, error: true, loading: false };
    }
    case DELETE_FORGOT: {
      return { ...state, data: [] };
    }
    default: {
      return state;
    }
  }
};

import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../actions/socket-data';
import { TSocketActions } from '../actions/socket-data';

type TState = {
  wsConnected: boolean;
  data: object[];

  error?: Event;
}

const initialState: TState = {
  wsConnected: false,
  data: []
};

export const wsReducer = (state = initialState, action: TSocketActions) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        data: action.payload
      };

    default:
      return state;
  }
};
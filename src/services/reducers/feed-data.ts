import {

  SET_FEED_MODAL_STATE,
  GET_FEED_ORDER,
} from "../actions/feed-data";
import { TFeedActions } from "../actions/feed-data";
import { TArray } from "./constructor-data";

export type TFeedArray = {
  ingredients: Array<TArray>;
  number: number;
  createdAt: string;
  name: string;
  status: string;
  _id: string;
}

export type TState = {
  data: Array<TFeedActions>;
  error: boolean;
  loading: boolean;
  modalState: boolean;
  order: object;
};

export const initialState: TState = {
  data: [],
  error: false,
  loading: false,
  modalState: false,
  order: {},
};

export const feedReducer = (
  state = initialState,
  action: TFeedActions
): TState => {
  switch (action.type) {
    case SET_FEED_MODAL_STATE: {
      return { ...state, modalState: action.modalState };
    }
    case GET_FEED_ORDER: {
      return { ...state, order: action.order };
    }
    default: {
      return state;
    }
  }
};

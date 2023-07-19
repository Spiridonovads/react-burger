import type { ThunkDispatch } from "redux-thunk";
import { store } from "../../index";
import { TConstructorActions } from "../actions/constructor-data";
import { TForgotPasswordActions } from "../actions/forgot-password-data";
import { TIngredientsActions } from "../actions/ingredients-data";
import { TLoginActions } from "../actions/login-data";
import { TLogoutActions } from "../actions/logout-data";
import { TOrderActions } from "../actions/order-number";
import { TPersonActions } from "../actions/person-data";
import { TRegisterActions } from "../actions/register-data";
import { TResetActions } from "../actions/reset-password-data";
import { TSocketActions } from "../actions/socket-data";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { TFeedActions } from "../actions/feed-data";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START_FEED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_CONNECTION_START_PROFILE
} from "../actions/socket-data";

export type TApplicationActions =
  | TConstructorActions
  | TForgotPasswordActions
  | TIngredientsActions
  | TLoginActions
  | TLogoutActions
  | TOrderActions
  | TPersonActions
  | TRegisterActions
  | TResetActions
  | TFeedActions
  | TSocketActions;

export const wsUrl: string = 'wss://norma.nomoreparties.space/orders';

export type TWSStoreActions = {
  wsInitFeed: typeof WS_CONNECTION_START_FEED;
  wsInitProfile: typeof WS_CONNECTION_START_PROFILE;
  onOpen: typeof WS_CONNECTION_SUCCESS;
  onClose: typeof WS_CONNECTION_CLOSED;
  onError: typeof WS_CONNECTION_ERROR;
  onMessage: typeof WS_GET_MESSAGE;
};

export const wsActions: TWSStoreActions = {
  wsInitFeed: WS_CONNECTION_START_FEED,
  wsInitProfile: WS_CONNECTION_START_PROFILE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<
  RootState,
  unknown,
  TApplicationActions
>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>();

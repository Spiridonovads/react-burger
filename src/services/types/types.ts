import type { ThunkDispatch } from 'redux-thunk';
import { store } from '../../index';
import { TConstructorActions } from '../actions/constructor-data';
import { TForgotPasswordActions } from '../actions/forgot-password-data';
import { TIngredientsActions } from '../actions/ingredients-data';
import { TLoginActions } from '../actions/login-data';
import { TLogoutActions } from '../actions/logout-data';
import { TOrderActions } from '../actions/order-number';
import { TPersonActions } from '../actions/person-data';
import { TRegisterActions } from '../actions/register-data';
import { TResetActions } from '../actions/reset-password-data';
import { TSocketActions } from '../actions/socket-data';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { TFeedActions } from '../actions/feed-data';

export type TApplicationActions = 
|TConstructorActions
|TForgotPasswordActions
|TIngredientsActions
|TLoginActions
|TLogoutActions
|TOrderActions
|TPersonActions
|TRegisterActions
|TResetActions
|TFeedActions
|TSocketActions

export const wsUrl: string = 'wss://norma.nomoreparties.space/orders/all';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>(); 




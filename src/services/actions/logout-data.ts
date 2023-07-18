import { getLogoutData } from "../../utile/api";
import { deleteCookie } from "../../utile/cookie";
import { AppDispatch } from "../types/types";

export const GET_LOGOUT_REQUEST: "GET_LOGOUT_REQUEST" = "GET_LOGOUT_REQUEST";
export const GET_LOGOUT_SUCCESS: "GET_LOGOUT_SUCCESS" = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_FAILED: "GET_LOGOUT_FAILED" = "GET_LOGOUT_FAILED";
export const DELETE_LOGOUT: "DELETE_LOGOUT" = "DELETE_LOGOUT";

export interface IGetLogoutRequest {
  readonly type: typeof GET_LOGOUT_REQUEST;
}
export const getLogoutRequest = (): IGetLogoutRequest => ({
  type: GET_LOGOUT_REQUEST,
});

export interface IGetLogoutSuccess {
  readonly type: typeof GET_LOGOUT_SUCCESS;
  readonly data: object;
}
export const getLogoutSuccess = (data: object): IGetLogoutSuccess => ({
  type: GET_LOGOUT_SUCCESS,
  data: data,
});

export interface IGetLogoutFailed {
  readonly type: typeof GET_LOGOUT_FAILED;
}
export const getLogoutFailed = (): IGetLogoutFailed => ({
  type: GET_LOGOUT_FAILED,
});

export interface IDeleteLogout {
  readonly type: typeof DELETE_LOGOUT;
}
export const deleteLogout = (): IDeleteLogout => ({
  type: DELETE_LOGOUT,
});

export type TLogoutActions =
  | IGetLogoutRequest
  | IGetLogoutSuccess
  | IGetLogoutFailed
  | IDeleteLogout;

export function getLogout() {
  return function (dispatch: AppDispatch) {
    dispatch(getLogoutRequest());
    getLogoutData()
      .then((data) => {
        dispatch(getLogoutSuccess(data));
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
      })
      .catch(() => dispatch(getLogoutFailed()));
  };
}

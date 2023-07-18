import { getResetPasswordData } from "../../utile/api";
import { AppDispatch } from "../types/types";

export const GET_RESET_REQUEST = "GET_RESET_REQUEST";
export const GET_RESET_SUCCESS = "GET_RESET_SUCCESS";
export const GET_RESET_FAILED = "GET_RESET_FAILED";
export const DELETE_RESET = "DELETE_RESET";

export interface IGetResetRequest {
  readonly type: typeof GET_RESET_REQUEST;
}
export const getResetRequest = (): IGetResetRequest => ({
  type: GET_RESET_REQUEST,
});

export interface IGetResetSuccess {
  readonly type: typeof GET_RESET_SUCCESS;
  readonly data: object;
}
export const getResetSuccess = (data: object): IGetResetSuccess => ({
  type: GET_RESET_SUCCESS,
  data: data,
});

export interface IGetResetFailed {
  readonly type: typeof GET_RESET_FAILED;
}
export const getResetFailed = (): IGetResetFailed => ({
  type: GET_RESET_FAILED,
});

export interface IDeleteReset {
  readonly type: typeof DELETE_RESET;
}
export const deleteReset = (): IDeleteReset => ({
  type: DELETE_RESET,
});

export type TResetActions =
  | IGetResetRequest
  | IGetResetSuccess
  | IGetResetFailed
  | IDeleteReset;

export function getReset(form: { password: string; code: string }) {
  return function (dispatch: AppDispatch) {
    dispatch(getResetRequest());
    getResetPasswordData(form)
      .then((data) => dispatch(getResetSuccess(data)))
      .catch(() => dispatch(getResetFailed()));
  };
}

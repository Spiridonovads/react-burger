import { initialState, logoutReducer } from "./logout-data";
import * as type from "../actions/logout-data";

describe("logout", () => {
  it("logout initialState", () => {
    expect(logoutReducer(undefined, {})).toEqual({
      data: {},
      error: false,
      loading: false,
    });
  });

  it("GET_LOGOUT_REQUEST", () => {
    const action = {
      type: type.GET_LOGOUT_REQUEST,
    };

    expect(logoutReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("GET_LOGOUT_SUCCESS", () => {
    const action = {
      type: type.GET_LOGOUT_SUCCESS,
      data: { 1: 1 },
    };

    expect(logoutReducer(initialState, action)).toEqual({
      ...initialState,
      data: { 1: 1 },
    });
  });

  it("GET_LOGOUT_FAILED", () => {
    const action = {
      type: type.GET_LOGOUT_FAILED,
    };

    expect(logoutReducer(initialState, action)).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("DELETE_LOGOUT", () => {
    const action = {
      type: type.DELETE_LOGOUT,
    };

    expect(logoutReducer(initialState, action)).toEqual({
      ...initialState,
      data: {},
    });
  });
});

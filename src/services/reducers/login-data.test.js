import { initialState, loginReducer } from "./login-data";
import * as type from "../actions/login-data";

describe("login", () => {
  it("login initialState", () => {
    expect(loginReducer(undefined, {})).toEqual({
      data: {},
      error: false,
      loading: false,
    });
  });

  it("GET_LOGIN_REQUEST", () => {
    const action = {
      type: type.GET_LOGIN_REQUEST,
    };

    expect(loginReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("GET_LOGIN_SUCCESS", () => {
    const action = {
      type: type.GET_LOGIN_SUCCESS,
      data: { 1: 1 },
    };

    expect(loginReducer(initialState, action)).toEqual({
      ...initialState,
      data: { 1: 1 },
    });
  });

  it("GET_LOGIN_FAILED", () => {
    const action = {
      type: type.GET_LOGIN_FAILED,
    };

    expect(loginReducer(initialState, action)).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("DELETE_LOGIN", () => {
    const action = {
      type: type.DELETE_LOGIN,
    };

    expect(loginReducer(initialState, action)).toEqual({
      ...initialState,
      data: {},
    });
  });
});

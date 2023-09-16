import { initialState, personReducer } from "./person-data";
import * as type from "../actions/person-data";

describe("person", () => {
  it("person initialState", () => {
    expect(personReducer(undefined, {})).toEqual({
      data: {},
      error: false,
      loading: false,
      changeError: false,
      changeLoading: false,
    });
  });

  it("GET_PERSON_REQUEST", () => {
    const action = {
      type: type.GET_PERSON_REQUEST,
    };

    expect(personReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("GET_PERSON_SUCCESS", () => {
    const action = {
      type: type.GET_PERSON_SUCCESS,
      data: { 1: 1 },
    };

    expect(personReducer(initialState, action)).toEqual({
      ...initialState,
      data: { 1: 1 },
    });
  });
  it("GET_PERSON_FAILED", () => {
    const action = {
      type: type.GET_PERSON_FAILED,
    };

    expect(personReducer(initialState, action)).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("GET_CHANGE_PERSON_REQUEST", () => {
    const action = {
      type: type.GET_CHANGE_PERSON_REQUEST,
    };

    expect(personReducer(initialState, action)).toEqual({
      ...initialState,
      changeLoading: true,
    });
  });

  it("GET_CHANGE_PERSON_SUCCESS", () => {
    const action = {
      type: type.GET_CHANGE_PERSON_SUCCESS,
      data: { 1: 1 },
    };

    expect(personReducer(initialState, action)).toEqual({
      ...initialState,
      data: { 1: 1 },
    });
  });
  it("GET_CHANGE_PERSON_FAILED", () => {
    const action = {
      type: type.GET_CHANGE_PERSON_FAILED,
    };

    expect(personReducer(initialState, action)).toEqual({
      ...initialState,
      changeError: true,
    });
  });
});

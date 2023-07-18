import { checkResponse } from "./res-ok";
import { getCookie } from "./cookie";

const BASE_URL = "https://norma.nomoreparties.space/api";

export const getIngredientsData = () => {
  const res = fetch(`${BASE_URL}/ingredients`).then((res) =>
    checkResponse(res)
  );
  return res;
};

export const getForgotPasswordData = (form: { email: string }) => {
  const res = fetch(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: form.email,
    }),
  }).then((res) => checkResponse(res));

  return res;
};

export const getResetPasswordData = (form: {
  password: string;
  code: string;
}) => {
  const res = fetch(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: form.password,
      token: form.code,
    }),
  }).then((res) => checkResponse(res));

  return res;
};

export const getRegistrationData = (form: {
  email: string;
  password: string;
  name: string;
}) => {
  const res = fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: form.email,
      password: form.password,
      name: form.name,
    }),
  }).then((res) => checkResponse(res));

  return res;
};

export const getOrderNumberData = (orderProducts: object[]) => {
  const res = fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      ingredients: orderProducts,
    }),
  }).then((res) => checkResponse(res));

  return res;
};

export const getLoginData = (form: { email: string; password: string }) => {
  const res = fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: form.email,
      password: form.password,
    }),
  }).then((res) => checkResponse(res));

  return res;
};

export const getLogoutData = () => {
  const res = fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: getCookie("refreshToken"),
    }),
  }).then((res) => checkResponse(res));

  return res;
};

export const getPersonData = () => {
  const res = fetch(`${BASE_URL}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken"),
    },
  }).then((res) => checkResponse(res));

  return res;
};

export const getChangePersonData = (form: { name: string }) => {
  const res = fetch(`${BASE_URL}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      name: form.name,
    }),
  }).then((res) => checkResponse(res));

  return res;
};

export const getUpdateTokenData = () => {
  const res = fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: getCookie("refreshToken"),
    }),
  }).then((res) => checkResponse(res));

  return res;
};

export const getFeedData = () => {
  const res = fetch(`${BASE_URL}/orders/all`).then((res) => checkResponse(res));
  return res;
};

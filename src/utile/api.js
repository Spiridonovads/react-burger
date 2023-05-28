import { checkResponse } from "./res-ok";

const BASE_URL = "https://norma.nomoreparties.space/api";

export const getIngredientsData = () => {
	const res = fetch(`${BASE_URL}/ingredients`).then((res) => checkResponse(res))
	return res
}

export const getOrderNumberData = (orderProducts) => {
	const res = fetch(`${BASE_URL}/orders`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			ingredients: orderProducts
			}),
	}).then((res) => checkResponse(res))

	return res
}

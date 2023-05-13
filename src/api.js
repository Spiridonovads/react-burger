const DATA_INGREDIENTS_URL = "https://norma.nomoreparties.space/api/ingredients";
const DATA_ORDER_NUMBER_URL = "https://norma.nomoreparties.space/api/orders";

export const getIngredientsData = async() => {
	const res = await fetch(DATA_INGREDIENTS_URL)
	return res.ok ? await res.json() : await res.json().then((err) => Promise.reject(err))
}

export const getOrderNumberData = async() => {
	const res = await fetch(DATA_ORDER_NUMBER_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"ingredients": ["643d69a5c3f7b9001cfa093c"]
			}),
	})
	return res.ok ? await res.json() : await res.json().then((err) => Promise.reject(err))
}

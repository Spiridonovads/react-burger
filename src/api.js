const dataUrl = "https://norma.nomoreparties.space/api/ingredients";

export const getData = async() => {
	const res = await fetch(dataUrl)
	return res.ok ? await res.json() : await res.json().then((err) => Promise.reject(err))
}

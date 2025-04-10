export const getDataFromLocalStorage = (key) => {
	const JSONData = localStorage.getItem(key)
	if (JSONData) {
		return JSON.parse(JSONData)
	}
	return null
}
export const setDataToLocalStorage = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data))
}

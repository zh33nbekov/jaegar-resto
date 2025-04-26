export const useHeader = () => {
	const DATE_NOW = new Date().toLocaleString('kg-KG', {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	})

	return { DATE_NOW }
}

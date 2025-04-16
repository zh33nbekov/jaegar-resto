export const toSlug = (str) => {
	return str.toLowerCase().replace(/\s+/g, '-')
}

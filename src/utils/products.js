export const toSlug = (str) => {
	return str.toLowerCase().replace(/\s+/g, '-')
}

export const getFinalPrice = (basePrice, option) => {
	return (
		option?.priceOverride ?? Math.round(basePrice * (option?.multiplier ?? 1))
	)
}

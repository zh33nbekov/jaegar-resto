import React, { createContext } from 'react'

const ProductsContext = createContext({})
const ProductsProvider = ({ children }) => {
	const values = {}
	return (
		<ProductsContext.Provider value={values}>
			{children}
		</ProductsContext.Provider>
	)
}

export default ProductsProvider

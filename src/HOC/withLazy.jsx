import React, { Suspense } from 'react'
import { Spinner } from '../components/UI'

export const withLazy = (Component) => {
	const WrappedWithSuspense = (props) => {
		return (
			<Suspense fallback={<Spinner />}>
				<Component {...props} />
			</Suspense>
		)
	}

	return WrappedWithSuspense
}

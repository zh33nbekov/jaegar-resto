import { Suspense } from 'react'
import { Spinner } from '../components/UI/spinner/Spinner'

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

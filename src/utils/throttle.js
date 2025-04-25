export const throttle = (func, limit) => {
	let inThrottle = false
	let lastTime = 0
	let timeoutId = null

	const throttled = () => {
		const now = Date.now()
		if (inThrottle || now - lastTime < limit) return

		func()
		lastTime = now
		inThrottle = true

		timeoutId = setTimeout(() => {
			inThrottle = false
		}, limit)
	}

	const cancel = () => {
		if (timeoutId !== null) {
			clearTimeout(timeoutId)
			inThrottle = false
			timeoutId = null
		}
	}

	return { throttled, cancel }
}

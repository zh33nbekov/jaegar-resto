export const throttle = (func, limit) => {
	let inThrottle
	let lastTime = 0
	return () => {
		if (inThrottle) return
		const now = Date.now()
		if (now - lastTime >= limit) {
			func()
			lastTime = now
		}
		inThrottle = true
		setTimeout(() => {
			inThrottle = false
		}, limit)
	}
}

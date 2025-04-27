import { useCallback, useRef } from 'react'

/**
 * Хук для ленивого динамического импорта модулей
 * @param {() => Promise<any>} importer - Функция, возвращающая import()
 * @returns {() => Promise<any>} - Функция для загрузки модуля
 */
export function useLazyImport(importer) {
	const moduleRef = useRef(null)

	const loadModule = useCallback(async () => {
		if (!moduleRef.current) {
			moduleRef.current = await importer()
		}
		return moduleRef.current
	}, [importer])

	return loadModule
}

import React, { useEffect, useRef, useState } from 'react'
import styles from './draggable-component.module.css'

const DraggableAdvanced = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [dragging, setDragging] = useState(false)
	const offset = useRef({ x: 0, y: 0 })

	// Начать перетаскивание
	const startDrag = (x, y) => {
		offset.current = {
			x: x - position.x,
			y: y - position.y,
		}
		setDragging(true)
	}

	// Перемещать элемент
	const onDrag = (x, y) => {
		if (!dragging) return

		// Ограничиваем в пределах окна
		const clampedX = Math.min(
			Math.max(x - offset.current.x, 0),
			window.innerWidth - 120
		)
		const clampedY = Math.min(
			Math.max(y - offset.current.y, 0),
			window.innerHeight - 120
		)

		setPosition({ x: clampedX, y: clampedY })
	}

	// Завершить перетаскивание
	const stopDrag = () => {
		setDragging(false)
	}

	// Мышь
	const handleMouseDown = (e) => {
		e.preventDefault() // Чтобы не выделялся текст
		startDrag(e.clientX, e.clientY)
	}

	const handleMouseMove = (e) => {
		onDrag(e.clientX, e.clientY)
	}

	const handleMouseUp = () => {
		stopDrag()
	}

	// Тач-устройства
	const handleTouchStart = (e) => {
		const touch = e.touches[0]
		startDrag(touch.clientX, touch.clientY)
	}

	const handleTouchMove = (e) => {
		const touch = e.touches[0]
		onDrag(touch.clientX, touch.clientY)
	}

	const handleTouchEnd = () => {
		stopDrag()
	}

	// Слушаем глобальные события мыши и тача
	useEffect(() => {
		if (dragging) {
			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseup', handleMouseUp)
			document.addEventListener('touchmove', handleTouchMove, {
				passive: false,
			})
			document.addEventListener('touchend', handleTouchEnd)
		} else {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', handleMouseUp)
			document.removeEventListener('touchmove', handleTouchMove)
			document.removeEventListener('touchend', handleTouchEnd)
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', handleMouseUp)
			document.removeEventListener('touchmove', handleTouchMove)
			document.removeEventListener('touchend', handleTouchEnd)
		}
	}, [dragging])

	return (
		<div
			className={`${styles.draggable} ${dragging ? styles.dragging : ''}`}
			style={{ left: `${position.x}px`, top: `${position.y}px` }}
			onMouseDown={handleMouseDown}
			onTouchStart={handleTouchStart}
		>
			Drag me 🚀
		</div>
	)
}

export default DraggableAdvanced

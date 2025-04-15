import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useBasketStore = create(
	persist(
		(set, get) => ({
			items: [],

			addToBasket: (item) => {
				const existing = get().items.find((i) => i.title === item.title)
				if (existing) {
					set({
						items: get().items.map((i) =>
							i.title === item.title
								? { ...i, quantity: i.quantity + item.quantity }
								: i
						),
					})
				} else {
					set({ items: [...get().items, item] })
				}
			},

			removeFromBasket: (title) => {
				set({ items: get().items.filter((i) => i.title !== title) })
			},

			clearBasket: () => {
				set({ items: [] })
			},
		}),
		{
			name: 'basket',
			getStorage: () => localStorage,
			partialize: (state) => ({ items: state.items }),
		}
	)
)

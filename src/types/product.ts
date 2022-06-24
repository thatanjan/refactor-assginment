export interface AddProductPayload {
	title: string
	description: string
	price: number
}

export type AddProduct = (_: AddProductPayload) => void

export interface Product extends AddProductPayload {
	isFavorite: boolean
	rating: {
		rate: number
		count: number
	}
}

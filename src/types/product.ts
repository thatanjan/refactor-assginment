export interface addProductPayload {
	title: string
	description: string
	price: string
}

export type AddProduct = (_: addProductPayload) => void

export interface Product extends addProductPayload {
	isFavorite: boolean
}

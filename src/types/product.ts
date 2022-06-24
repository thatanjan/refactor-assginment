export interface AddProductPayload {
	title: string
	description: string
	price: string
}

export type AddProduct = (_: AddProductPayload) => void

export interface Product extends AddProductPayload {
	isFavorite: boolean
}

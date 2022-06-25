import React, { useState, useMemo, useEffect } from 'react'

import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'
import ProductList from 'components/Product/ProductList'

import { Product, AddProduct, Products } from 'types/product'

import styles from './DisplayProducts.module.css'

type Props = {}

interface SendButtonProps {
	openModal: () => void
	alertMessage: string
}

interface ProductStatsProps {
	totalProducts: number
	totalFavorites: number
}

const SendButton = ({ openModal, alertMessage }: SendButtonProps) => (
	<div className={styles.buttonWrapper}>
		<Button onClick={openModal}>Send product proposal</Button>
		{alertMessage && <div className={styles.alertMessage}>{alertMessage}</div>}
	</div>
)

const ProductStats = ({ totalProducts, totalFavorites }: ProductStatsProps) => (
	<div className={styles.statsContainer}>
		<span>Total products: {totalProducts}</span>
		<span> - </span>
		<span>Number of favorites: {totalFavorites}</span>
	</div>
)

const DisplayProducts = (props: Props) => {
	const [products, setProducts] = useState<Product[]>([])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [alertMessage, setAlertMessage] = useState('')

	useEffect(() => {
		const handleError = () => {
			setAlertMessage('Error: could not load products')
			setTimeout(() => setAlertMessage(''), 5000)
		}

		;(async () => {
			try {
				const url = 'https://fakestoreapi.com/products'

				const response = await fetch('')

				if (!response.ok) return handleError()

				const jsonResponse = (await response.json()) as Products

				setProducts(jsonResponse.reverse())

				return true
			} catch (error) {
				return handleError()
			}
		})()
	}, [])

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)
	const addProduct: AddProduct = product => {}

	const toggleFavorite = (index: number) => {
		const product = products[index]

		product.isFavorite = !product.isFavorite

		return true
	}

	const totalProducts = products.length

	const totalFavorites = useMemo(
		() => products.filter(p => p.isFavorite).length,
		[totalProducts]
	)

	const productStatsProps = {
		totalProducts,
		totalFavorites,
	}

	const modalProps = { isModalOpen, closeModal, addProduct }

	return (
		<div>
			<SendButton alertMessage={alertMessage} openModal={openModal} />

			{isModalOpen && <Modal {...modalProps} />}

			<ProductStats {...productStatsProps} />

			<ProductList products={products} />
		</div>
	)
}

export default DisplayProducts

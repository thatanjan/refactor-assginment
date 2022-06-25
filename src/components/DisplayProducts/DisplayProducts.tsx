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

	const [totalFavorites, setTotalFavorites] = useState(0)

	useEffect(() => {
		const handleError = () => {
			setAlertMessage('Error: could not load products')
			setTimeout(() => setAlertMessage(''), 5000)
		}

		;(async () => {
			try {
				// local api is using because fakestoreapi is not working.
				// const url = 'https://fakestoreapi.com/products'
				const url = 'http://localhost:8000/products'

				const response = await fetch(url)

				if (!response.ok) return handleError()

				const jsonResponse = (await response.json()) as Products

				setProducts(jsonResponse.reverse())
				setTotalFavorites(jsonResponse.filter(p => p.isFavorite).length)

				return true
			} catch (error) {
				return handleError()
			}
		})()
	}, [])

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)
	const addProduct: AddProduct = product => {}

	const toggleFavorite = (index: number) => () => {
		const newProducts = [...products]
		const product = newProducts[index]

		const { isFavorite } = product

		product.isFavorite = !isFavorite

		setProducts(newProducts)
		setTotalFavorites(prev => prev + (isFavorite ? -1 : 1))

		return true
	}

	const productStatsProps = {
		totalProducts: products.length,
		totalFavorites,
	}

	const modalProps = { isModalOpen, closeModal, addProduct }

	return (
		<div>
			<SendButton alertMessage={alertMessage} openModal={openModal} />

			{isModalOpen && <Modal {...modalProps} />}

			<ProductStats {...productStatsProps} />

			<ProductList toggleFavorite={toggleFavorite} products={products} />
		</div>
	)
}

export default DisplayProducts

import React, { useState, useMemo } from 'react'

import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'

import { Product, AddProduct } from 'types/product'

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

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)
	const addProduct: AddProduct = product => {}

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
		</div>
	)
}

export default DisplayProducts

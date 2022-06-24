import * as React from 'react'
import { FaStar } from 'react-icons/fa'
import { nanoid } from 'nanoid'

import { Product } from 'types/product'

import styles from './ProductList.module.css'

interface ProductListProps {
	products: Product[]
}

interface ProductCardProps extends Product {
	index: number
}

const ProductCard = ({
	index,
	title,
	rating: { rate },
	price,
	description,
	isFavorite,
}: ProductCardProps) => {
	const {
		product: productClass,
		productBody,
		actionBarItem,
		actionBarItemLabel,
	} = styles
	return (
		<span
			className={productClass}
			style={{
				display: 'inline-block',
				overflowX: 'scroll',
				float: 'none',
				clear: 'both',
			}}
		>
			<span className={styles['product-title']} style={{ overflowX: 'hidden' }}>
				{title}
			</span>

			{rate !== undefined && (
				<p>
					<strong>Rating: {rate}/5</strong>
				</p>
			)}

			<p>
				<b>Price: ${price}</b>
			</p>

			<p className={productBody}>
				<span>
					<b>Description:</b>
				</span>
				<br />
				{description}
			</p>

			<span
				className={styles.action_bar}
				style={{ display: 'table', width: '100%' }}
			>
				<span
					className={`${actionBarItem} ${isFavorite ? 'active' : ''}`}
					role='button'
				>
					<FaStar />{' '}
					<span className={actionBarItemLabel}>
						{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
					</span>
				</span>
			</span>
		</span>
	)
}

const ProductList = ({ products }: ProductListProps) =>
	products.map((product, index) => (
		<ProductCard index={index} key={nanoid()} {...product} />
	))

export default ProductList

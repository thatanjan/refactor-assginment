import * as React from 'react'
import { FaStar } from 'react-icons/fa'
import { nanoid } from 'nanoid'

import { Product } from 'types/product'

import styles from './ProductList.module.css'

type ToggleFavorite = (index: number) => () => boolean

interface ProductListProps {
	products: Product[]
	toggleFavorite: ToggleFavorite
}

interface ProductCardProps extends Product {
	index: number
	toggleFavorite: ToggleFavorite
}

const ProductCard = ({
	index,
	title,
	rating: { rate },
	price,
	description,
	isFavorite,
	toggleFavorite,
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

			<div
				className={styles.action_bar}
				style={{ display: 'table', width: '100%' }}
			>
				<button
					type='button'
					className={`${actionBarItem} ${isFavorite ? 'active' : ''}`}
					onClick={toggleFavorite(index)}
				>
					<FaStar />{' '}
					<span className={actionBarItemLabel}>
						{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
					</span>
				</button>
			</div>
		</span>
	)
}

const ProductList = ({ products, toggleFavorite }: ProductListProps) => (
	<div>
		{products.map((product, index) => (
			<ProductCard
				index={index}
				key={nanoid()}
				toggleFavorite={toggleFavorite}
				{...product}
			/>
		))}
	</div>
)

export default ProductList

import * as React from 'react'
import { FaStar } from 'react-icons/fa'
import { nanoid } from 'nanoid'
import clsx from 'clsx'

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
}: ProductCardProps) => (
	<article className={styles.product}>
		<h2 className={styles.product__title}>{title}</h2>

		{rate > 0 && (
			<p>
				<strong>Rating:</strong> <span> {rate}/5</span>
			</p>
		)}

		<p>
			<strong>Price: </strong> <span>${price}</span>
		</p>

		<p className={styles.product__description}>
			<strong>Description:</strong> <span>{description}</span>
		</p>

		<div className={styles.action__bar}>
			<button
				type='button'
				onClick={toggleFavorite(index)}
				className={clsx(styles.action__button, isFavorite && 'favorite')}
			>
				<FaStar />

				<span className={styles.action__button__label}>
					{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
				</span>
			</button>
		</div>
	</article>
)

const ProductList = ({ products, toggleFavorite }: ProductListProps) => (
	<section className={styles.product__list}>
		{products.map((product, index) => (
			<ProductCard
				index={index}
				key={nanoid()}
				toggleFavorite={toggleFavorite}
				{...product}
			/>
		))}
	</section>
)

export default ProductList

import * as React from 'react'
import lodash from 'lodash'

import Header from 'components/Header/Header'
import DisplayProducts from 'components/DisplayProducts/DisplayProducts'

import styles from 'App.module.css'

import img1 from 'images/img1.png'
import img2 from 'images/img2.png'

const DisplayImage = () => (
	<section
		className={styles.main}
		style={{
			margin: '50px inherit',
			display: 'flex',
			justifyContent: 'space-evenly',
		}}
	>
		<img src={img1} style={{ maxHeight: '15em', display: 'block' }} />
		<img src={img2} style={{ maxHeight: '15rem', display: 'block' }} />
	</section>
)

class App extends React.Component<
	{},
	{
		products: any[]
		isOpen: boolean
		isShowingMessage: boolean
		message: string
		numFavorites: number
		prodCount: number
	}
> {
	constructor(props: any) {
		super(props)

		this.favClick = this.favClick.bind(this)
		this.onSubmit = this.onSubmit.bind(this)

		this.state = {
			products: [],
			isOpen: false,
			isShowingMessage: false,
			message: '',
			numFavorites: 0,
			prodCount: 0,
		}
	}

	componentDidMount() {
		document.title = 'Droppe refactor app'
	}

	favClick(title: string) {
		const prods = this.state.products
		const idx = lodash.findIndex(prods, { title: title })
		let currentFavs = this.state.numFavorites
		let totalFavs: any

		if (prods[idx].isFavorite) {
			prods[idx].isFavorite = false
			totalFavs = --currentFavs
		} else {
			totalFavs = ++currentFavs
			prods[idx].isFavorite = true
		}

		this.setState(() => ({ products: prods, numFavorites: totalFavs }))
	}

	onSubmit(payload: { title: string; description: string; price: string }) {
		const updated = lodash.clone(this.state.products)
		updated.push({
			title: payload.title,
			description: payload.description,
			price: payload.price,
		})

		this.setState({
			products: updated,
			prodCount: lodash.size(this.state.products) + 1,
		})

		this.setState({
			isOpen: false,
		})

		this.setState({
			isShowingMessage: true,
			message: 'Adding product...',
		})

		// **this POST request doesn't actually post anything to any database**
		fetch('https://fakestoreapi.com/products', {
			method: 'POST',
			body: JSON.stringify({
				title: payload.title,
				price: payload.price,
				description: payload.description,
			}),
		})
			.then(res => res.json())
			.then(json => {
				;(function (t) {
					setTimeout(() => {
						t.setState({
							isShowingMessage: false,
							message: '',
						})
					}, 2000)
				})(this)
			})
	}

	render() {
		const { products, isOpen } = this.state
		return (
			<main className={styles.container}>
				<Header />

				<DisplayImage />

				<DisplayProducts />
			</main>
		)
	}
}

export default App

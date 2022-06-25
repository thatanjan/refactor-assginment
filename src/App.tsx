import React from 'react'

import Header from 'components/Header/Header'
import DisplayProducts from 'components/DisplayProducts/DisplayProducts'

import styles from 'App.module.css'

import img1 from 'images/img1.png'
import img2 from 'images/img2.png'

const DisplayImage = () => (
	<section className={styles.image__container}>
		<img alt='Droppe' src={img1} />
		<img alt='Droppe' src={img2} />
	</section>
)

const App = () => (
	<main className={styles.app__container}>
		<Header />

		<DisplayImage />

		<DisplayProducts />
	</main>
)

export default App

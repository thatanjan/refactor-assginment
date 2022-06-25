import React from 'react'

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
		<img
			alt='Droppe'
			src={img1}
			style={{ maxHeight: '15em', display: 'block' }}
		/>
		<img
			alt='Droppe'
			src={img2}
			style={{ maxHeight: '15rem', display: 'block' }}
		/>
	</section>
)

const App = () => (
	<main className={styles.container}>
		<Header />

		<DisplayImage />

		<DisplayProducts />
	</main>
)

export default App

import React from 'react'

import logo from 'images/droppe-logo.png'

import styles from './Header.module.css'

const Header = () => (
	<header className={styles.header}>
		<div className={styles.logo__Wrapper}>
			<img src={logo} className={styles.logo} alt='Droppe Logo' />
		</div>
	</header>
)

export default Header

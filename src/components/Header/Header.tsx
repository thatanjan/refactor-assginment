import React from 'react'

import logo from 'images/droppe-logo.png'

import styles from './Header.module.css'

const Header = () => (
	<div className={styles.header}>
		<div className={styles.headerImageWrapper}>
			<img src={logo} className={styles.headerImage} alt='Droppe Logo' />
		</div>
	</div>
)

export default Header

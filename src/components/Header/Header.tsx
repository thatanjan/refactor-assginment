import React from 'react'
import clsx from 'clsx'

import styles from 'App.module.css'

import logo from 'images/droppe-logo.png'

const Header = () => (
	<div className={styles.header}>
		<div className={clsx('container', styles.headerImageWrapper)}>
			<img src={logo} className={styles.headerImage} alt='Droppe Logo' />
		</div>
	</div>
)

export default Header

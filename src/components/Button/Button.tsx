import React, { DOMAttributes } from 'react'
import styles from './Button.module.css'

type ButtonProps = DOMAttributes<HTMLButtonElement>

const Button = ({ children, onClick }: ButtonProps) => (
	<button type='button' className={styles.button} onClick={onClick}>
		{children}
	</button>
)

export default Button

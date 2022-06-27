import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, type = 'button', ...props }: ButtonProps) => (
	// eslint-disable-next-line react/button-has-type
	<button className={styles.button} type={type} {...props}>
		{children}
	</button>
)

export default Button

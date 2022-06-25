import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react'

import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'number'
	id: string
	labelProps?: LabelHTMLAttributes<HTMLLabelElement>
	value: string | number
}

const Input = ({ labelProps, id, ...props }: InputProps) => (
	<div>
		<label className={styles.label} htmlFor={id} {...labelProps} />
		<input className={styles.input} name={id} {...props} />
	</div>
)

Input.defaultProps = {
	type: 'text',
	labelProps: {},
}

export default Input

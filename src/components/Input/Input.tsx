import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react'
import { Formik, Form, Field, ErrorMessage, ErrorMessageProps } from 'formik'

import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'number'
	id: string
	labelProps?: LabelHTMLAttributes<HTMLLabelElement>
	value: string | number
	errorMessageProps?: ErrorMessageProps
	component?: 'input' | 'textarea'
}

const Input = ({ labelProps, errorMessageProps, ...props }: InputProps) => {
	const { id } = props

	return (
		<div>
			{props.component === 'input' && (
				<label className={styles.label} htmlFor={id} {...labelProps} />
			)}

			<Field className={styles.input} name={id} {...props} />

			<ErrorMessage name={id} component='div' {...errorMessageProps} />
		</div>
	)
}

Input.defaultProps = {
	type: 'text',
	labelProps: {},
	errorMessageProps: {},
	component: 'input',
}

export default Input

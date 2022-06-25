import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react'
import { Field, ErrorMessage, ErrorMessageProps } from 'formik'

import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'number'
	id: string
	labelProps?: LabelHTMLAttributes<HTMLLabelElement>
	errorMessageProps?: ErrorMessageProps
	component?: 'input' | 'textarea'
}

const Input = ({ labelProps, errorMessageProps, ...props }: InputProps) => {
	const { id, component } = props

	const className = styles[component as string]

	return (
		<div>
			{component === 'input' && (
				<label className={styles.label} htmlFor={id} {...labelProps} />
			)}

			<Field className={className} name={id} {...props} />

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

import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react'
import { Formik, Form, Field, ErrorMessage, ErrorMessageProps } from 'formik'

import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'number'
	id: string
	labelProps?: LabelHTMLAttributes<HTMLLabelElement>
	value: string | number
	errorMessageProps?: ErrorMessageProps
}

const Input = ({ labelProps, ...props }: InputProps) => (
	<div>
		<label className={styles.label} htmlFor={props.id} {...labelProps} />
		<Field className={styles.input} name={props.id} {...props} />
		<ErrorMessage name={props.id} component='div' />
	</div>
)

Input.defaultProps = {
	type: 'text',
	labelProps: {},
	errorMessageProps: {},
}

export default Input

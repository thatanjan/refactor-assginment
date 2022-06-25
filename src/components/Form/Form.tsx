import React, {
	useState,
	ChangeEvent,
	FormEventHandler,
	InputHTMLAttributes,
} from 'react'

import Button from 'components/Button/Button'

import { AddProduct, AddProductPayload } from 'types/product'

import styles from './Form.module.css'

interface FormProps {
	addProduct: AddProduct
}

type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'number'
}

const Input = (props: InputProps) => (
	<input className={styles.input} {...props} />
)

Input.defaultProps = {
	type: 'text',
}

const Form = ({ addProduct }: FormProps) => {
	const initialFormData = {
		title: '',
		price: 0,
		description: '',
	}

	const [formData, setFormData] = useState<AddProductPayload>(initialFormData)

	const handleChange = (e: InputChangeEvent) => {
		e.persist()

		setFormData(prev => {
			const { name, value } = e.target
			return { ...prev, [name]: value }
		})
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		addProduct(formData)

		setFormData(initialFormData)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<span className={styles.label}>Product title: *</span>

			<Input
				value={formData.title}
				placeholder='Title...'
				onChange={handleChange}
				name='title'
			/>

			<span className={styles.label}>Product details: *</span>

			<Input
				value={formData.price}
				placeholder='Price...'
				name='price'
				onChange={handleChange}
				type='number'
			/>

			<textarea
				value={formData.description}
				placeholder='Start typing product description here...'
				className={styles.textarea}
				name='description'
				onChange={handleChange}
			/>

			<Button type='submit'>Add a product</Button>
		</form>
	)
}

export default Form

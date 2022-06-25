import React, {
	useState,
	ChangeEvent,
	FormEventHandler,
	InputHTMLAttributes,
	LabelHTMLAttributes,
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

const InputLabel = ({
	htmlFor,
	...props
}: LabelHTMLAttributes<HTMLLabelElement>) => (
	<label className={styles.label} {...props} htmlFor={htmlFor} />
)

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
			const { name, value: currentValue } = e.target

			let value: string | number = currentValue

			if (name === 'price') value = parseFloat(value) || 0

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
			<InputLabel htmlFor='title'>Product title: *</InputLabel>

			<Input
				value={formData.title}
				placeholder='Title...'
				onChange={handleChange}
				name='title'
				id='title'
			/>

			<InputLabel htmlFor='title'>Product details: *</InputLabel>

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

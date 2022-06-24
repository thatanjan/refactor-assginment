import React, { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'

import Button from 'components/Button/Button'

import { AddProduct, AddProductPayload } from 'types/product'

import styles from './Form.module.css'

interface FormProps {
	addProduct: AddProduct
}

type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface InputProps {
	value: string | number
	placeholder: string
	// eslint-disable-next-line react/require-default-props
	type?: 'text' | 'number'
	onChange: (_: InputChangeEvent) => void
	name: string
}

const Input = ({ type = 'text', ...props }: InputProps) => (
	<input type={type} className={styles.input} {...props} />
)

const Form = ({ addProduct }: FormProps) => {
	let formRef = React.useRef<HTMLFormElement>(null)
	let titleRef = React.useRef<HTMLInputElement>(null)
	let priceRef = React.useRef<HTMLInputElement>(null)
	let descriptionRef = React.useRef<HTMLTextAreaElement>(null)

	const [formData, setFormData] = useState<AddProductPayload>({
		title: '',
		price: 0,
		description: '',
	})

	const handleChange = (e: InputChangeEvent) => {
		e.persist()

		setFormData(prev => {
			const { name, value } = e.target
			return { ...prev, [name]: value }
		})
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()

		if (!titleRef.current?.value) {
			alert('Your product needs a title')

			return
		}

		if (!descriptionRef.current?.value || !priceRef.current?.value) {
			alert('Your product needs some content')

			return
		}

		addProduct(formData)

		formRef.current?.reset()
	}

	return (
		<form
			className={styles.form}
			onSubmit={event => handleSubmit(event)}
			ref={formRef}
		>
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

			<Button>Add a product</Button>
		</form>
	)
}

export default Form

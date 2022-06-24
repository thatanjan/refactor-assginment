import React, { useState } from 'react'

import Button from 'components/Button/Button'

import { AddProduct, AddProductPayload } from 'types/product'

import styles from './Form.module.css'

interface FormProps {
	addProduct: AddProduct
}

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

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
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

			<input
				value={formData.title}
				placeholder='Title...'
				className={styles.input}
				onChange={handleChange}
				name='title'
			/>

			<span className={styles.label}>Product details: *</span>

			<input
				value={formData.price}
				placeholder='Price...'
				className={styles.input}
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

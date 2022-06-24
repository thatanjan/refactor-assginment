import * as React from 'react'

import Button from 'components/Button/Button'

import { AddProduct } from 'types/product'

import styles from './Form.module.css'

interface FormProps {
	addProduct: AddProduct
}

const Form = ({ addProduct }: FormProps) => {
	let formRef = React.useRef<HTMLFormElement>(null)
	let titleRef = React.useRef<HTMLInputElement>(null)
	let priceRef = React.useRef<HTMLInputElement>(null)
	let descriptionRef = React.useRef<HTMLTextAreaElement>(null)

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

		addProduct({
			title: titleRef.current && titleRef.current.value,
			description: descriptionRef.current && descriptionRef.current.value,
			price: priceRef.current && priceRef.current.value,
		})

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
				ref={titleRef}
				placeholder='Title...'
				defaultValue=''
				className={styles.input}
			/>

			<span className={styles.label}>Product details: *</span>

			<input
				ref={priceRef}
				placeholder='Price...'
				defaultValue=''
				className={styles.input}
			/>

			<textarea
				ref={descriptionRef}
				placeholder='Start typing product description here...'
				defaultValue=''
				className={styles.textarea}
			/>

			<Button>Add a product</Button>
		</form>
	)
}

export default Form

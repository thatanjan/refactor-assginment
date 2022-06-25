import React, { useState, ChangeEvent, FormEventHandler } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import Button from 'components/Button/Button'
import Input from 'components/Input/Input'

import { AddProduct, AddProductPayload } from 'types/product'

import styles from './Form.module.css'

interface FormProps {
	addProduct: AddProduct
}

type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const CusomForm = ({ addProduct }: FormProps) => {
	const initialFormData: AddProductPayload = {
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
		<Formik
			validate={values => {}}
			onSubmit={() => {}}
			initialValues={initialFormData}
		>
			{({ isSubmitting }) => (
				<Form>
					<Input
						value={formData.title}
						placeholder='Title...'
						onChange={handleChange}
						id='title'
						labelProps={{ children: 'Product Title: *' }}
					/>

					<Input
						value={formData.price}
						placeholder='Price...'
						id='price'
						onChange={handleChange}
						type='number'
						labelProps={{ children: 'Product Price: *' }}
					/>

					<Input
						component='textarea'
						value={formData.description}
						placeholder='Start typing product description here...'
						className={styles.textarea}
						id='description'
						onChange={handleChange}
					/>

					<Button type='submit'>Add a product</Button>
				</Form>
			)}
		</Formik>
	)
}

export default CusomForm

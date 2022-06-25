import React from 'react'
import { Formik, Form } from 'formik'

import Button from 'components/Button/Button'
import Input from 'components/Input/Input'

import { AddProduct, AddProductPayload } from 'types/product'

import styles from './Form.module.css'

interface FormProps {
	addProduct: AddProduct
}

const CusomForm = ({ addProduct }: FormProps) => {
	const initialFormData: AddProductPayload = {
		title: '',
		price: 0,
		description: '',
	}

	return (
		<Formik
			validate={values => {
				type Errors = {
					[key in keyof typeof values]: string
				}

				const errors: Partial<Errors> = {}

				const { title, price, description } = values

				if (!title) errors.title = 'Title is Required'
				if (!price) errors.price = 'Price is Required'
				if (!description) errors.description = 'Description is Required'

				if (price < 1) errors.price = 'Price must be greater than 0'

				if (title.length < 3) errors.title = 'Title must be at least 3 characters'
				if (title.length > 50)
					errors.title = 'Title must be less than 50 characters'

				if (description.length < 20)
					errors.description = 'Description must be at least 3 characters'

				if (description.length > 500)
					errors.description = 'Description must be less than 500 characters'

				return errors
			}}
			onSubmit={(values, { resetForm }) => {
				addProduct(values)
				resetForm()
			}}
			initialValues={initialFormData}
		>
			{({ isSubmitting }) => (
				<Form className={styles.form}>
					<Input
						placeholder='Title...'
						id='title'
						labelProps={{ children: 'Title: *' }}
					/>

					<Input
						placeholder='Price...'
						id='price'
						type='number'
						labelProps={{ children: 'Price: *' }}
					/>

					<Input
						component='textarea'
						placeholder='Start typing product description here...'
						id='description'
					/>

					<Button disabled={isSubmitting} type='submit'>
						Add a product
					</Button>
				</Form>
			)}
		</Formik>
	)
}

export default CusomForm

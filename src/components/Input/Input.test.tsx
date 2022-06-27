import { render, screen } from '@testing-library/react'
import { Formik, Form, ErrorMessageProps } from 'formik'
import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react'

import Input from './Input'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type: 'text' | 'number'
	id: string
	labelProps: LabelHTMLAttributes<HTMLLabelElement>
	errorMessageProps: ErrorMessageProps
	component: 'input' | 'textarea'
}

const MockFormik = (props: InputProps) => {
	const initialValues = {
		name: '',
	}

	const handleValidate = jest.fn()
	const handleSubmit = jest.fn()

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validate={handleValidate}
		>
			{() => (
				<Form>
					<Input {...props} />
				</Form>
			)}
		</Formik>
	)
}

describe('Test Input component as a text element', () => {
	const props: InputProps = {
		type: 'text',
		id: 'name',
		labelProps: {
			children: 'Name',
		},
		errorMessageProps: {
			name: 'name',
		},
		component: 'input',
	}

	render(<MockFormik {...props} />)

	test('should render Input component correctly', () => {
		const element = screen.getByLabelText<HTMLInputElement>('Name')

		expect(element).toBeInTheDocument()
		expect(element).toHaveAttribute('type', 'text')
		expect(element).toHaveAttribute('id', 'name')
		expect(element.tagName.toLowerCase()).toBe('input')
	})
})

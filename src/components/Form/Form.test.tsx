import React from 'react'
import { render, screen } from '@testing-library/react'

import Form from './Form'

describe('Test Add Product Form', () => {
	const props = { addProduct: jest.fn() }

	test('should be rendered on screen', () => {
		render(<Form {...props} />)

		const formElement = screen.getByRole<HTMLFormElement>('form')

		expect(formElement).toBeInTheDocument()
	})
})

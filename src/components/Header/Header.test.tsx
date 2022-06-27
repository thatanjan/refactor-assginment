import React from 'react'
import { render, screen } from '@testing-library/react'
import logo from 'images/droppe-logo.png'

import Header from './Header'

test('renders Header component', () => {
	render(<Header />)

	const el = screen.getByAltText<HTMLImageElement>('Droppe Logo')

	expect(el).toBeInTheDocument()
	expect(el.tagName.toLowerCase()).toBe('img')
	expect(el.src).toBe(`http://localhost/${logo}`)

	expect(true).toBe(true)
})

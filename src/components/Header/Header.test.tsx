import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from './Header'

test('renders Header', () => {
	const { container } = render(<Header />)

	console.log(screen)

	expect(true).toBe(true)
})

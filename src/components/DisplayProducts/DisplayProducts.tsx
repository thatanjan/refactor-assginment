import React, { useState } from 'react'

import Button from 'components/Button/Button'
import styles from './DisplayProducts.module.css'

type Props = {}

interface SendButtonProps {
	openModal: () => void
}

const SendButton = ({ openModal }: SendButtonProps) => (
	<div className={styles.buttonWrapper}>
		<Button onClick={openModal}>Send product proposal</Button>
	</div>
)

const DisplayProducts = (props: Props) => {
	const [products, setProducts] = useState([])
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)

	return (
		<div>
			<SendButton openModal={openModal} />
		</div>
	)
}

export default DisplayProducts

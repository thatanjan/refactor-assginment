import React, { useState } from 'react'

import Button from 'components/Button/Button'
import styles from './DisplayProducts.module.css'

type Props = {}

interface SendButtonProps {
	openModal: () => void
	alertMessage: string
}

const SendButton = ({ openModal, alertMessage }: SendButtonProps) => (
	<div className={styles.buttonWrapper}>
		<Button onClick={openModal}>Send product proposal</Button>
		{alertMessage && <div className={styles.alertMessage}>{alertMessage}</div>}
	</div>
)

const DisplayProducts = (props: Props) => {
	const [products, setProducts] = useState([])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [alertMessage, setAlertMessage] = useState('')

	const openModal = () => setIsModalOpen(true)

	return (
		<div>
			<SendButton alertMessage={alertMessage} openModal={openModal} />
		</div>
	)
}

export default DisplayProducts

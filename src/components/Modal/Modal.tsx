import * as React from 'react'
import ReactModal from 'react-modal'
import { FaTimes } from 'react-icons/fa'

import Form from 'components/Form/Form'

import styles from './Modal.module.css'

interface Props {
	isModalOpen: boolean
	closeModal: () => void
	handleSubmit: (_: React.FormEvent<HTMLFormElement>) => void
}

const Modal = ({ isModalOpen, closeModal, handleSubmit }: Props) => (
	<ReactModal
		isOpen={isModalOpen}
		className={styles.reactModalContent}
		overlayClassName={styles.reactModalOverlay}
	>
		<div className={styles.modalContentHelper}>
			<button type='button' className={styles.modalClose} onClick={closeModal}>
				<FaTimes />
			</button>

			{/* <Form handleSubmit={handleSubmit} /> */}
		</div>
	</ReactModal>
)

export default Modal

import * as React from 'react'
import ReactModal from 'react-modal'
import { FaTimes } from 'react-icons/fa'

import { AddProduct } from 'types/product'

import Form from 'components/Form/Form'

import styles from './Modal.module.css'

interface Props {
	isModalOpen: boolean
	closeModal: () => void
	addProduct: AddProduct
}

const Modal = ({ isModalOpen, closeModal, addProduct }: Props) => (
	<ReactModal
		isOpen={isModalOpen}
		className={styles.react__Modal}
		overlayClassName={styles.reactModalOverlay}
	>
		<button type='button' className={styles.modalClose} onClick={closeModal}>
			<FaTimes />
		</button>

		<Form addProduct={addProduct} />
	</ReactModal>
)

export default Modal

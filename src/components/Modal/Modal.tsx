import React, { useEffect } from 'react'
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

const Modal = ({ isModalOpen, closeModal, addProduct }: Props) => {
	useEffect(() => {
		const bodyStyle = document.body.style

		bodyStyle.overflowY = 'hidden'

		return () => {
			bodyStyle.overflowY = 'auto'
		}
	}, [])

	return (
		<ReactModal
			isOpen={isModalOpen}
			className={styles.react__Modal}
			overlayClassName={styles.modal__overlay}
		>
			<div className={styles.close__icon__container}>
				<button type='button' className={styles.modal__close} onClick={closeModal}>
					<FaTimes />
				</button>
			</div>

			<Form addProduct={addProduct} />
		</ReactModal>
	)
}
export default Modal

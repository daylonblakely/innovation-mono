import './animated-modal.css';
import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

Modal.setAppElement('#root'); // Set the app element for accessibility

/* eslint-disable-next-line */
export interface AnimatedModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export function AnimatedModal({
  modalIsOpen,
  closeModal,
  children,
}: AnimatedModalProps) {
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <motion.div
        className="modal"
        variants={modalVariants}
        initial="hidden"
        animate={modalIsOpen ? 'visible' : 'hidden'}
        exit="exit"
      >
        {children}
      </motion.div>
    </Modal>
  );
}

export default AnimatedModal;

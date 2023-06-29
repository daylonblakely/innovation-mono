import './animated-modal.css';
import React from 'react';
import Modal from 'react-modal';
import { motion, Variants } from 'framer-motion';

Modal.setAppElement('#root'); // Set the app element for accessibility

export interface AnimatedModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const AnimatedModal: React.FC<AnimatedModalProps> = ({
  modalIsOpen,
  closeModal,
  children,
}) => {
  const modalVariants: Variants = {
    hidden: {
      opacity: 0,
      y: '-100vh',
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
      y: '-100vh',
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
      closeTimeoutMS={200} // Optional: Add a timeout for smoother transitions
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
};

export default AnimatedModal;

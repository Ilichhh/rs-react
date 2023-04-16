import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '../assets/icons';

export interface ModalContextProps {
  isOpen: boolean;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

interface ModalProps {
  isOpen: boolean;
  content: React.ReactNode;
  onClose: () => void;
}

function Modal({ isOpen, content, onClose }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal__background" onClick={onClose}></div>
      <div className="modal">
        {content}
        <button className="modal__close-btn" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </>,
    document.body
  );
}

interface ModalProviderProps {
  children: React.ReactNode;
}

function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setIsOpen(true);
    setContent(content);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  const value: ModalContextProps = {
    isOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal isOpen={isOpen} content={content} onClose={closeModal} />
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };

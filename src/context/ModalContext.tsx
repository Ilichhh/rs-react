import React, { createContext, useState, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '../assets/icons';

export interface ModalContextProps {
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  content: React.ReactNode;
}

const ModalContext = createContext<ModalContextProps>({
  openModal: () => {},
  closeModal: () => {},
  content: null,
});

interface ModalProviderProps {
  children: React.ReactNode;
}

function ModalProvider({ children }: ModalProviderProps) {
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = useCallback((content: React.ReactNode) => {
    setContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setContent(null);
  }, []);

  const modal = useMemo(
    () => (
      <>
        <div className="modal__background" onClick={closeModal}></div>
        <div className="modal">
          {content}
          <button className="modal__close-btn" onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
      </>
    ),
    [closeModal, content]
  );

  const value = useMemo(
    () => ({
      openModal,
      closeModal,
      content,
    }),
    [openModal, closeModal, content]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {content && ReactDOM.createPortal(modal, document.body)}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };

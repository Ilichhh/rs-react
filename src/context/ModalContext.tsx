import React, { createContext, useState, useEffect } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  content: React.ReactNode;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  content: null,
});

interface ModalProviderProps {
  children: React.ReactNode;
}

function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    content,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen && (
        <div className="modal__background" onClick={closeModal}>
          <div className="modal">{content}</div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };

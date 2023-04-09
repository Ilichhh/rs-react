import { render, act, cleanup } from '@testing-library/react';
import { ModalProvider, ModalContext, ModalContextProps } from './ModalContext';
import React, { useContext } from 'react';

describe('ModalProvider', () => {
  afterEach(() => {
    cleanup();
  });

  test('opens and closes modal', () => {
    let openModal: ModalContextProps['openModal'];
    let closeModal: ModalContextProps['closeModal'];
    let content: ModalContextProps['content'];

    const TestComponent = () => {
      const { openModal: om, closeModal: cm, content: c } = useContext(ModalContext);
      openModal = om;
      closeModal = cm;
      content = c;

      return <div />;
    };

    act(() => {
      render(
        <ModalProvider>
          <TestComponent />
        </ModalProvider>
      );
    });

    expect(content).toBe(null);

    act(() => {
      openModal('Modal content');
    });

    expect(content).toBe('Modal content');

    act(() => {
      closeModal();
    });

    expect(content).toBe(null);
  });
});

/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { act, render, within } from '@testing-library/react';
import Modal from './Modal';

describe('Modal 컴포넌트 테스트', () => {
  const handleCloseMock = jest.fn();

  beforeEach(() => {
    document.body.innerHTML = '<div id="modal"></div>';
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.body.style.overflow = 'auto'; // overflow 상태 복구
  });

  it('isOpen - true 시 컴포넌트가 정상적으로 렌더링된다.', async () => {
    await act(async () => {
      render(
        <Modal isOpen={true} handleClose={handleCloseMock}>
          <div>Modal Content</div>
        </Modal>,
      );
    });

    const modalRoot = document.getElementById('modal');
    expect(modalRoot).toBeInTheDocument(); // #modal이 존재하는지 확인
  });

  it('isOpen - false 시 컴포넌트가 렌더링 되지 않는다.', async () => {
    await act(async () => {
      render(
        <Modal isOpen={false} handleClose={handleCloseMock}>
          <div id="modalTest">Modal Content</div>
        </Modal>,
      );
    });

    const modalRoot = document.getElementById('modal');
    expect(modalRoot?.innerHTML).toBe(''); // 렌더링되지 않음을 확인
  });
});

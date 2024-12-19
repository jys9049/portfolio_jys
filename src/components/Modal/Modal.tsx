'use client';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IModalProps } from './Modal.types';
import styles from './Modal.module.scss';
function Modal({ children, isOpen, handleClose }: IModalProps) {
  const modalEle = document.getElementById('modal');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!modalEle || !isOpen) return;
  return createPortal(
    <>
      <div className={styles.container}>{children}</div>
      <div onClick={handleClose} className={styles.background}></div>
    </>,
    modalEle,
  );
}

export default Modal;

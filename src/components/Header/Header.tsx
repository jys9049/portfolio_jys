'use client';

import React from 'react';
import styles from './Header.module.scss';
import Modal from '../Modal/Modal';

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FRONTEND DEVELOPER</h1>
      <p className={styles.subTitle}>
        안녕하세요. 프론트엔드 개발자 정용성입니다.
      </p>
    </div>
  );
}

export default Header;

import React from 'react';
import styles from './information.module.scss';

function Information() {
  return (
    <div>
      <p className={styles.title}>안녕하세요</p>
      <p className={styles.subTitle}>반갑습니다</p>
    </div>
  );
}

export default Information;

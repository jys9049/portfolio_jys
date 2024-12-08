import React, { PropsWithChildren } from 'react';
import styles from './ContentsContainer.module.scss';

function ContentsContainer({
  title,
  children,
}: { title: string } & PropsWithChildren) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
}

export default ContentsContainer;

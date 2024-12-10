'use client';

import React, { useEffect, useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive/useResponsive';
import { mobileText, defaultText } from './const';
import styles from './Information.module.scss';

function Information() {
  const { isMobile } = useResponsive();

  const [text, setText] = useState<string[]>(defaultText);

  useEffect(() => {
    if (isMobile) {
      setText(mobileText);
    } else {
      setText(defaultText);
    }
  }, [isMobile]);

  return (
    <div className={styles.container}>
      {text.map((item) => (
        <p className={styles.text} key={item}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default Information;

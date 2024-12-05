'use client';

import React, { useEffect, useState } from 'react';
import styles from './Information.module.scss';
import { mobileText, defaultText } from './const';

import { useIsMobile } from '@/hooks/useResponsive/useResponsive';

function Information() {
  const isMobile = useIsMobile();

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
      {text.map((item, idx) => (
        <p className={styles.text} key={idx}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default Information;

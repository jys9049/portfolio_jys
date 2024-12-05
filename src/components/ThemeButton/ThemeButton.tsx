'use client';

import React, { useEffect, useState } from 'react';
import { ReactComponent as DarkIcon } from '@/assets/dark-mode.svg';
import { ReactComponent as LightIcon } from '@/assets/light-mode.svg';
import styles from './ThemeButton.module.scss';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/hooks/useResponsive/useResponsive';

function ThemeButton() {
  const { theme, handleThemeChange } = useTheme();
  const isMobile = useIsMobile();

  const [size, setSize] = useState(24);

  useEffect(() => {
    if (isMobile) {
      setSize(24);
    } else {
      setSize(30);
    }
  }, [isMobile]);

  return (
    <button onClick={handleThemeChange} className={styles.themeButton}>
      {theme === 'light-mode' ? (
        <DarkIcon width={size} height={size} />
      ) : (
        <LightIcon width={size} height={size} />
      )}
    </button>
  );
}

export default ThemeButton;

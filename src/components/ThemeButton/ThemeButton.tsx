'use client';

import React, { useEffect, useState } from 'react';

import DarkIcon from '@/assets/dark-mode.svg';
import LightIcon from '@/assets/light-mode.svg';

import { useTheme } from '@/context/ThemeContext';
import { useResponsive } from '@/hooks/useResponsive/useResponsive';

import styles from './ThemeButton.module.scss';

function ThemeButton() {
  const { theme, handleThemeChange } = useTheme();
  const { isMobile } = useResponsive();

  const [size, setSize] = useState(24);

  useEffect(() => {
    if (isMobile) {
      setSize(24);
    } else {
      setSize(30);
    }
  }, [isMobile]);

  return (
    <button
      data-testid="toggle-theme"
      onClick={handleThemeChange}
      className={styles.themeButton}
    >
      {theme === 'light-mode' ? (
        <DarkIcon width={size} height={size} />
      ) : (
        <LightIcon width={size} height={size} />
      )}
    </button>
  );
}

export default ThemeButton;

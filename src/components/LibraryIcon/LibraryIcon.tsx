'use client';

import React, { useEffect, useState } from 'react';
import styles from './LibraryIcon.module.scss';
import { ILibraryIconProps } from './LibraryIcon.types';
import { ICONS } from './const';
import { useResponsive } from '@/hooks/useResponsive/useResponsive';

function LibraryIcon({ iconTitle }: ILibraryIconProps) {
  const selectIcon = ICONS.find((item) => item.key === iconTitle);

  const [iconSize, setIconSize] = useState(42);

  const { isTablet, isMobile } = useResponsive();

  useEffect(() => {
    if (isMobile) {
      setIconSize(20);
    } else if (isTablet) {
      setIconSize(40);
    } else {
      setIconSize(50);
    }
  }, [isTablet, isMobile]);

  if (!selectIcon) return;
  return (
    <div className={styles.container} id={selectIcon.key}>
      {
        <selectIcon.icon
          data-testid={selectIcon.key}
          width={iconSize}
          height={iconSize}
        />
      }
      <p className={styles.title}>{selectIcon.name}</p>
    </div>
  );
}

export default LibraryIcon;

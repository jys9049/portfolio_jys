'use client';

import React, { useEffect, useState } from 'react';

import { useResponsive } from '@/hooks/useResponsive/useResponsive';
import ContentsContainer from '@/components/ContentsContainer';
import styles from './Skill.module.scss';
import LibraryIcon from '../LibraryIcon/LibraryIcon';
import { ICONS } from '../LibraryIcon/const';

function Skill() {
  return (
    <ContentsContainer title="Skill">
      <div className={styles.skillContainer}>
        {ICONS.map((item) => (
          <LibraryIcon key={item.key} iconTitle={item.key} />
        ))}
      </div>
    </ContentsContainer>
  );
}

export default Skill;

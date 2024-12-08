'use client';

import React, { useEffect, useState } from 'react';

import Devops from '@/assets/devops.svg';
import Language from '@/assets/language.svg';
import Library from '@/assets/library.svg';

import styles from './Skill.module.scss';
import { useResponsive } from '@/hooks/useResponsive/useResponsive';
import { mySkills } from './const';
import ContentsContainer from '@/components/ContentsContainer';

function Skill() {
  const [iconSize, setIconSize] = useState(42);

  const { isTablet, isMobile } = useResponsive();

  useEffect(() => {
    if (isMobile) {
      setIconSize(24);
    } else if (isTablet) {
      setIconSize(36);
    } else {
      setIconSize(42);
    }
  }, [isTablet, isMobile]);

  return (
    <ContentsContainer title={'Skill'}>
      <div className={styles.skillContainer}>
        {mySkills.map((item, idx) => {
          let icon: any;
          switch (item.icon) {
            case 'Language':
              icon = (
                <Language fill={'#999999'} width={iconSize} height={iconSize} />
              );
              break;
            case 'Library':
              icon = (
                <Library fill={'#999999'} width={iconSize} height={iconSize} />
              );
              break;
            case 'Devops':
              icon = (
                <Devops fill={'#999999'} width={iconSize} height={iconSize} />
              );
              break;
          }
          return (
            <div
              className={`${styles.skill} ${idx === 1 ? styles.sideLine : ''}`}
            >
              {icon}
              <div className={styles.skillTextWrap}>
                {item.skills.map((skill) => (
                  <p className={styles.skillText}>{skill}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </ContentsContainer>
  );
}

export default Skill;

'use client';

import React, { useEffect, useState } from 'react';

import Brush from '@/assets/brush.svg';
import Language from '@/assets/language.svg';
import Library from '@/assets/library.svg';

import { useResponsive } from '@/hooks/useResponsive/useResponsive';
import ContentsContainer from '@/components/ContentsContainer';
import { mySkills } from './const';
import styles from './Skill.module.scss';

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
    <ContentsContainer title="Skill">
      <div className={styles.skillContainer}>
        {mySkills.map((item, idx) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let icon: any;
          switch (item.icon) {
            case 'Language':
              icon = (
                <Language
                  data-testid="languageIcon"
                  fill="#999999"
                  width={iconSize}
                  height={iconSize}
                />
              );
              break;
            case 'Library':
              icon = (
                <Library fill="#999999" width={iconSize} height={iconSize} />
              );
              break;
            case 'Brush':
              icon = (
                <Brush fill="#999999" width={iconSize} height={iconSize} />
              );
              break;
            default:
              icon = (
                <Language fill="#999999" width={iconSize} height={iconSize} />
              );
          }
          return (
            <div
              key={item.icon}
              className={`${styles.skill} ${idx === 1 ? styles.sideLine : ''}`}
            >
              {icon}
              <div className={styles.skillTextWrap}>
                {item.skills.map((skill) => (
                  <p key={skill[0]} className={styles.skillText}>
                    {skill}
                  </p>
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

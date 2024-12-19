import React from 'react';
import ContentsContainer from '@/components/ContentsContainer';
import { educationAndCareerData } from './const';
import styles from './Education.module.scss';

function Education() {
  return (
    <ContentsContainer title="Education / Career">
      {educationAndCareerData.map((item) => (
        <div className={styles.container} key={item.title}>
          <div className={styles.textContainer}>
            <div className={styles.titleWrap}>
              <p className={styles.title}>{item.title}</p>
              {item.type === 'CAREER' && (
                <p className={styles.careerText}>{item.type}</p>
              )}
            </div>
            <p className={styles.subText}>{`( ${item.period} )`}</p>
            {item.desc && (
              <p className={`${styles.subText} ${styles.highlight}`}>
                {item.desc}
              </p>
            )}
          </div>
        </div>
      ))}
    </ContentsContainer>
  );
}

export default Education;

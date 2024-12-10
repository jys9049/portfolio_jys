import React from 'react';
import ContentsContainer from '@/components/ContentsContainer';
import dayjs from 'dayjs';
import styles from './AboutMe.module.scss';

function AboutMe() {
  const getCareer = () => {
    const careerMonth = dayjs().diff(dayjs('2023-02-02'), 'month');
    const careerYear = Math.floor(careerMonth / 12);

    if (careerYear > 0) {
      return `${careerYear}년 ${careerMonth - 12}개월`;
    } else {
      return `${careerMonth - 12}개월`;
    }
  };

  return (
    <ContentsContainer title="About Me">
      <div className={styles.container}>
        <div className={styles.textWrap}>
          <p className={styles.mainText}>이름</p>
          <p className={styles.subText}>정용성</p>
        </div>
        <div className={styles.textWrap}>
          <p className={styles.mainText}>생년월일</p>
          <p className={styles.subText}>1997.04.09</p>
        </div>
        <div className={styles.textWrap}>
          <p className={styles.mainText}>개발 경력</p>
          <p className={styles.subText}>{getCareer()}</p>
        </div>
      </div>
    </ContentsContainer>
  );
}

export default AboutMe;

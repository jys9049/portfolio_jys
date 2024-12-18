/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import AboutMe from './AboutMe';
import dayjs from 'dayjs';

jest.mock('dayjs', () => {
  const actualDayjs = jest.requireActual('dayjs');
  return (date: any) => (date ? actualDayjs(date) : actualDayjs());
});

describe('AboutMe 컴포넌트 테스트', () => {
  it('AboutMe 컴포넌트가 정상적으로 렌더링된다.', () => {
    render(<AboutMe />);

    const nameText = screen.getByText('이름');
    expect(nameText).toBeInTheDocument();
  });

  it('경력이 년, 월 정상적으로 렌더링 됩니다.', () => {
    const careerMonth = dayjs().diff(dayjs('2023-02-02'), 'month');
    const careerYear = Math.floor(careerMonth / 12);
    const expectedCareer =
      careerYear > 0
        ? `${careerYear}년 ${careerMonth - careerYear * 12}개월`
        : `${careerMonth}개월`;

    render(<AboutMe />);
    expect(screen.getByText(expectedCareer)).toBeInTheDocument();
  });
});

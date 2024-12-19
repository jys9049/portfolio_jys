/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { educationAndCareerData } from './const';
import Education from './Education';

describe('Education 컴포넌트 테스트', () => {
  it('텍스트가 정상적으로 렌더링된다.', () => {
    render(<Education />);
    educationAndCareerData.forEach((item) => {
      const text = screen.getByText(item.title);
      expect(text).toBeInTheDocument();
    });
  });
});

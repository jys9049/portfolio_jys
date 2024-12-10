/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Skill from './Skill';
import mySkills from './const';
import { useMediaQuery } from 'react-responsive';
import { useResponsive } from '@/hooks/useResponsive/useResponsive';

jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn(),
}));

jest.mock('../../hooks/useResponsive/useResponsive', () => ({
  useResponsive: jest.fn().mockReturnValue({
    isMobile: false, // 예시: 모바일 화면이 아닐 때
    isTablet: false, // 예시: 태블릿 화면일 때
    isLaptop: false, // 예시: 랩탑 화면이 아닐 때
  }),
}));

describe('ThemeButton 컴포넌트 테스트', () => {
  it('text가 정상적으로 렌더링됩니다.', () => {
    render(<Skill />);
    mySkills.map((skill) => {
      skill.skills.map((item) => {
        const text = screen.getByText(item);
        return expect(text).toBeInTheDocument();
      });
    });
  });

  it('모바일 화면 작은 아이콘이 노출됩니다.', () => {
    (useResponsive as jest.Mock).mockReturnValue({
      isMobile: true, // 예시: 모바일 화면이 아닐 때
      isTablet: false, // 예시: 태블릿 화면일 때
      isLaptop: false, // 예시: 랩탑 화면이 아닐 때
    });
    render(<Skill />);
    const icon = screen.getByTestId('languageIcon');
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
  });

  it('모바일 화면 작은 아이콘이 노출됩니다.', () => {
    (useResponsive as jest.Mock).mockReturnValue({
      isMobile: false, // 예시: 모바일 화면이 아닐 때
      isTablet: true, // 예시: 태블릿 화면일 때
      isLaptop: false, // 예시: 랩탑 화면이 아닐 때
    });

    const icon = screen.getByTestId('languageIcon');

    expect(icon).toHaveAttribute('width', '30');
    expect(icon).toHaveAttribute('height', '30');
  });
});

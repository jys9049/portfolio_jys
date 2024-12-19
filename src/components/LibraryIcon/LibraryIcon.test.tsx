/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LibraryIcon from './LibraryIcon';

import { ICONS } from '../LibraryIcon/const';
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

describe('LibraryIcon 컴포넌트 테스트', () => {
  it('LibraryIcon이 정상적으로 렌더링됩니다.', () => {
    ICONS.map((skill) => {
      render(<LibraryIcon iconTitle={skill.key} />);
      const text = screen.getByText(skill.name);
      return expect(text).toBeInTheDocument();
    });
  });

  it('LibraryIcon props로 iconTitle을 넘기지 않을 시 렌더링되지 않는다.', () => {
    const { container } = render(<LibraryIcon />);
    expect(container.firstChild).toBeNull();
  });

  it('모바일 화면에서 LibraryIcon이 20X20 사이즈로 렌더링됩니다.', () => {
    (useResponsive as jest.Mock).mockReturnValue({
      isMobile: true, // 예시: 모바일 화면이 아닐 때
      isTablet: false, // 예시: 태블릿 화면일 때
      isLaptop: false, // 예시: 랩탑 화면이 아닐 때
    });
    ICONS.map((skill) => {
      render(<LibraryIcon iconTitle={skill.key} />);

      const icon = screen.getByTestId(skill.key);
      expect(icon).toHaveAttribute('width', '20');
      expect(icon).toHaveAttribute('height', '20');
    });
  });

  it('태블릿 화면에서 LibraryIcon이 40X40 사이즈로 렌더링됩니다.', () => {
    (useResponsive as jest.Mock).mockReturnValue({
      isMobile: false, // 예시: 모바일 화면이 아닐 때
      isTablet: true, // 예시: 태블릿 화면일 때
      isLaptop: false, // 예시: 랩탑 화면이 아닐 때
    });
    ICONS.map((skill) => {
      render(<LibraryIcon iconTitle={skill.key} />);

      const icon = screen.getByTestId(skill.key);
      expect(icon).toHaveAttribute('width', '40');
      expect(icon).toHaveAttribute('height', '40');
    });
  });
});

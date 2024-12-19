/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, renderHook, screen } from '@testing-library/react';
import Information from '@/components/Information/Information.tsx';
import { defaultText, mobileText } from './const';
import { useMediaQuery } from 'react-responsive';
import { useResponsive } from '@/hooks/useResponsive/useResponsive';

jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn(),
}));

describe('Information 컴포넌트 테스트', () => {
  it('디폴트 텍스트가 정상적으로 렌더링된다.', () => {
    render(<Information />);
    defaultText.forEach((item) => {
      const text = screen.getByText(item);
      expect(text).toBeInTheDocument();
    });
  });

  it('모바일 화면일 때 모바일 텍스트가 정상적으로 렌더링된다.', () => {
    require('react-responsive').useMediaQuery.mockImplementation(() => true);
    render(<Information />);
    mobileText.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('모바일 환경에서 true를 반환한다.', () => {
    (useMediaQuery as jest.Mock).mockImplementation(() => true);
    const { result } = renderHook(() => useResponsive());
    expect(result.current.isMobile).toBe(true);
  });

  it('데스크톱 환경에서 false를 반환한다.', () => {
    (useMediaQuery as jest.Mock).mockImplementation(() => false);
    const { result } = renderHook(() => useResponsive());
    expect(result.current.isMobile).toBe(false);
  });
});

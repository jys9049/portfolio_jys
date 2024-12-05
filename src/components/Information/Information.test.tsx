/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Information from '@/components/Information/Information.tsx';
import { defaultText, mobileText } from './const';

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

    // Check that all mobileText items are rendered
    mobileText.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});

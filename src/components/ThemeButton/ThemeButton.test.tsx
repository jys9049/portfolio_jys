/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import ThemeButton from '@/components/ThemeButton/ThemeButton.tsx';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { useMediaQuery } from 'react-responsive';

jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn(),
}));

describe('ThemeButton 컴포넌트 테스트', () => {
  it('ThemeButton 컴포넌트가 정상적으로 렌더링된다.', () => {
    render(
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>,
    );

    const themeButton = screen.getByTestId('toggle-theme');
    expect(themeButton).toBeInTheDocument();
  });

  it('ThemeButton 클릭 시 data-theme이 변경됩니다.', () => {
    render(
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId('toggle-theme'));
    expect(document.body.getAttribute('data-theme')).toBe('dark-mode');

    fireEvent.click(screen.getByTestId('toggle-theme'));
    expect(document.body.getAttribute('data-theme')).toBe('light-mode');
  });

  it('모바일 화면일 때 버튼 사이즈가 작아집니다', async () => {
    (useMediaQuery as jest.Mock).mockImplementation(() => true);

    render(
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>,
    );

    const themeBtn = screen.getByTestId('toggle-theme');

    expect(themeBtn).toHaveStyle('width: 24');
  });
});

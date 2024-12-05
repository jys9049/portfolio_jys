/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ThemeButton from '@/components/ThemeButton/ThemeButton.tsx';
import { ThemeProvider } from '@/context/ThemeContext';

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

    const lineElement = screen.getByRole('button');
    expect(lineElement).toBeInTheDocument();
  });
});

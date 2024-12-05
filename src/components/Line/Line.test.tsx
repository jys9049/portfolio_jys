/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Line from '@/components/Line/Line';

describe('Line 컴포넌트 테스트', () => {
  it('Line 컴포넌트가 정상적으로 렌더링된다.', () => {
    render(<Line />);

    const lineElement = screen.getByRole('separator'); // <hr>는 "separator"로 자동 감지됨
    expect(lineElement).toBeInTheDocument();
  });
});

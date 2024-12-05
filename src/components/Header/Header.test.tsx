/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header/Header.tsx';

describe('Header 컴포넌트 테스트', () => {
  it('텍스트가 정상적으로 렌더링된다.', () => {
    render(<Header />);

    const headerText1 = screen.getByText('FRONTEND DEVELOPER');
    const headerText2 = screen.getByText(
      '안녕하세요. 프론트엔드 개발자 정용성입니다.',
    );

    expect(headerText1).toBeInTheDocument();
    expect(headerText2).toBeInTheDocument();
  });
});

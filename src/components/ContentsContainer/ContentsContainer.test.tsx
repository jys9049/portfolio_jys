/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ContentsContainer from './ContentsContainer';

describe('ContentsContainer 컴포넌트 테스트', () => {
  it('Title 텍스트가 정상적으로 렌더링된다.', () => {
    render(<ContentsContainer title="TitleTest" />);

    const titleText = screen.getByText('TitleTest');
    expect(titleText).toBeInTheDocument();
  });
});

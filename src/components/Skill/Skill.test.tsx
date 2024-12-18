/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Skill from './Skill';

import { ICONS } from '../LibraryIcon/const';

describe('ThemeButton 컴포넌트 테스트', () => {
  it('text가 정상적으로 렌더링됩니다.', () => {
    render(<Skill />);
    ICONS.map((skill) => {
      const text = screen.getByText(skill.name);
      return expect(text).toBeInTheDocument();
    });
  });
});

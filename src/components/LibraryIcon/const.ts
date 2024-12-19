import NextJs from '@/assets/nextjs.svg';
import Bitbucket from '@/assets/bitbucket-icon.svg';
import Figma from '@/assets/figma-icon.svg';
import Github from '@/assets/github-icon-1.svg';
import JavaScript from '@/assets/logo-javascript.svg';
import TypeScript from '@/assets/typescript.svg';
import Jest from '@/assets/jest.svg';
import Sass from '@/assets/sass-1.svg';
import Mui from '@/assets/material-ui-1.svg';
import React from '@/assets/react-2.svg';
import Slack from '@/assets/slack-new-logo.svg';
import Storybook from '@/assets/storybook.svg';
import I18Next from '@/assets/i18next-icon.svg';
import StyleX from '@/assets/stylex-logo-small.svg';
import Ky from '@/assets/ky.svg';

import { EIconTitle } from './LibraryIcon.types';

export const ICONS = [
  { key: EIconTitle.REACT, icon: React, name: 'React' },
  { key: EIconTitle.NEXTJS, icon: NextJs, name: 'Next.js' },
  { key: EIconTitle.JAVASCRIPT, icon: JavaScript, name: 'JavaScript' },
  { key: EIconTitle.TYPESCRIPT, icon: TypeScript, name: 'TypeScript' },
  { key: EIconTitle.JEST, icon: Jest, name: 'Jest' },
  { key: EIconTitle.STORYBOOK, icon: Storybook, name: 'Storybook' },
  { key: EIconTitle.SASS, icon: Sass, name: 'Sass' },
  { key: EIconTitle.MUI, icon: Mui, name: 'Mui' },
  { key: EIconTitle.STYLEX, icon: StyleX, name: 'StyleX' },
  { key: EIconTitle.I18NEXT, icon: I18Next, name: 'i18next' },
  { key: EIconTitle.KY, icon: Ky, name: 'ky' },
  { key: EIconTitle.BITBUCKET, icon: Bitbucket, name: 'Bitbucket' },
  { key: EIconTitle.GITHUB, icon: Github, name: 'Github' },
  { key: EIconTitle.FIGMA, icon: Figma, name: 'Figma' },
  { key: EIconTitle.SLACK, icon: Slack, name: 'Slack' },
];

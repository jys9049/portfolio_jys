import { EIconTitle } from '../LibraryIcon/LibraryIcon.types';
import { IProjectDataType } from './Project.types';

export const PROJECT_DATA: IProjectDataType[] = [
  {
    title: 'CCCV NFT',
    period: '2023.04 ~ 2023.09',
    desc: '사용자 중심의 NFT 오픈마켓',
    devStaff: { front: 4, back: 6, pm: 1, design: 1 },
    skills: [EIconTitle.NEXTJS, EIconTitle.TYPESCRIPT, EIconTitle.MUI],
    detail: [
      '다양한 화면 크기와 디바이스에 최적화된 반응형 UI 구현',
      '컴포넌트를 아토믹 디자인 원칙에 따라 모듈화하여 재사용성 및 유지보수성 향상',
      'Nextjs의 API Router와 Cloudflare R2의 Presigned URL을 활용해 특정 시간 동안만 유효한 안전한 파일 다운로드 링크를 제공하여 보안을 강화',
    ],
  },
  {
    title: 'CCOB',
    period: '2023.07 ~ 2023.10',
    desc: '블록체인 배지 기반 ESG 멤버십 포인트 플랫폼',
    devStaff: { front: 2, back: 4, pm: 1, design: 1 },
    skills: [
      EIconTitle.REACT,
      EIconTitle.TYPESCRIPT,
      EIconTitle.MUI,
      EIconTitle.JEST,
      EIconTitle.STORYBOOK,
    ],
    detail: [
      'jest + react-testing-library를 사용하여 컴포넌트별 단위테스트 진행',
    ],
  },
  {
    title: 'GEM.SWAP',
    period: '2023.10 ~ 2023.12',
    desc: 'GEM POINT 관련 포인트 교환 플랫폼',
    devStaff: { front: 2, back: 4, pm: 1, design: 1 },
    skills: [
      EIconTitle.NEXTJS,
      EIconTitle.TYPESCRIPT,
      EIconTitle.MUI,
      EIconTitle.I18NEXT,
    ],
    detail: ['i18next 라이브러리를 사용하여 다국어 지원 기능을 구현'],
  },
  {
    title: 'Bloom',
    period: '2024.01 ~ 2024.02',
    desc: '모바일 티켓팅 플랫폼',
    devStaff: { front: 4, back: 4, pm: 1, design: 2 },
    skills: [EIconTitle.REACT, EIconTitle.TYPESCRIPT, EIconTitle.STORYBOOK],
    detail: [
      '모바일 앱 내부에서 사용될 웹뷰 개발을 통해 서비스의 UI/UX 일관성 제공',
    ],
  },
  {
    title: 'CCCV WALLET',
    period: '2024.02 ~ 2024.04',
    desc: '멀티체인 기반의 Web 3.0 환경에서 제공하는 제공하는 다양한 디지털 아이템(NFT, Badge, Point) 등을 한 곳에서 간편하게 관리할 수 있는 서비스  -> CCCV 통합 로그인 플랫폼',
    devStaff: { front: 2, back: 2, pm: 1, design: 1 },
    skills: [EIconTitle.REACT, EIconTitle.TYPESCRIPT, EIconTitle.STYLEX],
    detail: [
      '포트원 API를 활용한 본인인증 및 결제 기능 초기 세팅',
      'postMessage API를 활용해 동일 도메인 내의 다른 프로젝트와 신호를 주고받아 로그인 상태 관련 작업을 구현',
    ],
  },
  {
    title: 'NAMETOOL',
    period: '2024.06 ~ 2024.10',
    desc: '디지털 명함 서비스',
    devStaff: { front: 2, back: 2, pm: 1, design: 1 },
    skills: [
      EIconTitle.NEXTJS,
      EIconTitle.TYPESCRIPT,
      EIconTitle.KY,
      EIconTitle.I18NEXT,
    ],
    detail: [
      'Youtube API 기술 검토',
      'Next.js API Routes를 활용해 사용자가 입력한 URL의 Open Graph 이미지(og:image)를 추출하는 API 구현',
    ],
  },
  {
    title: '대구 마라톤 관리자 사이트',
    period: '2024.10 ~ 2024.11',
    desc: '대구 마라톤 기록인증 NFT 발급 서비스',
    devStaff: { front: 2, back: 1, pm: 1, design: 1 },
    skills: [EIconTitle.REACT, EIconTitle.TYPESCRIPT, EIconTitle.STORYBOOK],
    detail: ['Storybook 라이브러리를 사용하여 컴포넌트의 시각적 문서화 제공'],
  },
];

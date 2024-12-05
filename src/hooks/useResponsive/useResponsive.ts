import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => useMediaQuery({ query: '(max-width:720px)' });
export const useIsDesktop = () =>
  useMediaQuery({ query: '(max-width:1024px)' });

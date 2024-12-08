import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isMobile = useMediaQuery({ query: '(max-width:335px)' });
  const isTablet = useMediaQuery({ query: '(max-width:720px)' });
  const isLaptop = useMediaQuery({ query: '(max-width:1024px)' });

  return { isMobile, isTablet, isLaptop };
};

export const useIsMobile = () => useMediaQuery({ query: '(max-width:720px)' });
export const useIsTablet = () => useMediaQuery({ query: '(max-width:1024px)' });

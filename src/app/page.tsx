import Header from '@/components/Header';
import Line from '@/components/Line';
import Information from '@/components/Information';

import styles from './page.module.scss';
import Skill from '@/components/Skill';
import ThemeButton from '@/components/ThemeButton';

export default function Home() {
  return (
    <div className={styles.page}>
      <ThemeButton />
      <Header />
      <Information />
      <Line />
      <Skill />
    </div>
  );
}

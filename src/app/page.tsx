import Header from '@/components/Header';
import Line from '@/components/Line';
import Information from '@/components/Information';
import Skill from '@/components/Skill';
import ThemeButton from '@/components/ThemeButton';

import styles from './page.module.scss';
import Education from '@/components/Education/Education';

export default function Home() {
  return (
    <div className={styles.page}>
      <ThemeButton />
      <Header />
      <Information />
      <div className={styles.contents}>
        <Skill />
        <Education />
      </div>
    </div>
  );
}

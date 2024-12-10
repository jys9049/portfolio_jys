import Header from '@/components/Header';
import Information from '@/components/Information';
import Skill from '@/components/Skill';
import ThemeButton from '@/components/ThemeButton';
import Education from '@/components/Education/Education';
import AboutMe from '@/components/AboutMe/AboutMe';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <ThemeButton />
      <Header />
      <Information />
      <div className={styles.contents}>
        <AboutMe />
        <Skill />
        <Education />
      </div>
    </div>
  );
}

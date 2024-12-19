import Header from '@/components/Header';
import Information from '@/components/Information';
import Skill from '@/components/Skill';
import ThemeButton from '@/components/ThemeButton';
import AboutMe from '@/components/AboutMe/AboutMe';
import Education from '@/components/Education/Education';
import styles from './page.module.scss';
import Modal from '@/components/Modal/Modal';
import Project from '@/components/Project';

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
        <Project />
      </div>
    </div>
  );
}

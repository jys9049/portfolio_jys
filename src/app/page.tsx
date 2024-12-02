import Information from '@/components/Information/information';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Information />
    </div>
  );
}

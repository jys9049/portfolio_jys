import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <p className={styles.title}>안녕하세요</p>
      <p className={styles.subTitle}>반갑습니다</p>
    </div>
  );
}

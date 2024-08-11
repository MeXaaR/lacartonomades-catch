import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Carto'Nomades</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className={styles.grid}>
          <img src="/logo.png" alt="lacartonomades" className={styles.logo} />
        </div>
      </main>
    </div>
  );
}

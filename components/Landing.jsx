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
        <h1 className={styles.title}>Tu vas etre redirigé vers ton application mobile</h1>
        <h3 className={styles.title}>Si ce n'est pas le cas, merci de nous le faire savoir sur telegram</h3>
      </main>
    </div>
  );
}

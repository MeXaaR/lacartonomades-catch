import Head from 'next/head';
import styles from '../../../styles/Home.module.css';

export default function DeletePage() {
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
        <h1 className={styles.title}>Tu souhaites supprimer ton compte ?</h1>
        <p className={styles.title}>Rien de plus simple, ouvre ton application, va dans le Menu en bas a droite, puis sur Profil</p>
        <p className={styles.title}>En appuyant sur le bouton supprimer mon compte, tu pourras définitivement supprimer toute information te concernant sur nos serveurs. Il ne restera rien et c'est irréversible.</p>
        <p className={styles.title}>Ou plus simple encore, ouvre cette page depuis ton téléphone, et ca ouvrira le bon écran dans l'application.</p>
        <p className={styles.title}>Mais pas d'inquiétude, tu seras toujours le/la bienvenu(e) en recréant un nouveau compte.</p>
      </main>
    </div>
  );
}

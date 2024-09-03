import Link from 'next/link';
import styles from '../../ui/styles/Home.module.css';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import Image from 'next/image';
import Navbar from '../../ui/Navbar';

export default function Bio() {
  return (
    <div className={styles.container}>
      <Header styles={styles} />
      <main className={styles.main1}>
        <Navbar styles={styles} />


        <div className={styles.content}>
          <pre className={styles.codeContent}>
            {`/**
 1  * Escola:
 2  * No ensino médio ganhei uma bolsa para estudar
 3  * em uma escola particular;
 4  * Desafiador, mas um sonho sendo realizado;
 5  * No início, tive dificuldades em me adaptar;
 6  * Não sentia que pertencia àquele lugar;
 7  * Com o tempo, fui me adaptando e me destacando;
 8  * Descobri o conceito de EQUIDADE;
 9  * No final de tudo, consegui uma nova bolsa, 
 10 * dessa vez para estudar na PUC;
 */`}
          </pre>
        </div>
        <div className={styles.content}>
          <Image className={styles.adao} src="/adao3.jpg" alt="Adão" width={500} height={400} />
        </div>

      </main>

      <Footer styles={styles} />
    </div>
  );
}

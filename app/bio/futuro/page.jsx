import Link from 'next/link';
import styles from '../../ui/styles/Home.module.css';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import Image from 'next/image';
import Navbar from '../../ui/Navbar';
import Logo from '../../ui/Logo';

export default function Bio() {
  return (
    <div className={styles.container}>
      <Header styles={styles} />
      <main className={styles.main}>
        <Navbar styles={styles} />


        <div className={styles.content}>
          <article className={styles.artc}>
            <div className={styles.bckgcode}>
              <p className={styles.code}><span className={styles.const}>const</span> <span className={styles.var}>igualdade</span> = '<span className={styles.str}>Oportunidades Iguais</span>';</p>
              <p className={styles.code}><span className={styles.const}>const</span> <span className={styles.var}>equidade</span> = '<span className={styles.str}>Oportunidades Equitativas</span>';</p>
              <p className={styles.code}><span className={styles.var}>igualdade</span> == <span className={styles.var}>equidade</span>; // false</p>
              <p className={styles.code}><span className={styles.const}>const</span> <span className={styles.var}>pessoa</span> = '<span className={styles.str}>'Pessoa'</span>';</p>
              <p className={styles.code}><span className={styles.const}>const</span> <span className={styles.var}>Sucesso</span> = <span className={styles.str}>true</span>;</p>
              <p className={styles.code}><span className={styles.var}>Pessoa</span> + <span className={styles.var}>Equidade</span>; == <span className={styles.var}>Sucesso</span> //true</p>

            </div>

          </article>

          <Logo styles={styles} />
        </div>
      </main>


      <Footer styles={styles} />
    </div>
  );
}

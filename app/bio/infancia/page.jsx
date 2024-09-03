import Link from 'next/link';
import styles from '../../ui/styles/Home.module.css';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import Image from 'next/image';
import Navbar from '../../ui/Navbar';

export default function Infancia() {
  return (
    <div className={styles.container}>
      <Header styles={styles} />
      <main className={styles.main}>
        <Navbar styles={styles} />


        <div className={styles.linha} />

        <div className={styles.content1}>
          <div className={styles.up}>
            <div className={styles.card1}>
              <h2>Meu primeiro contato com computador</h2>
              <p>Meu primeiro contato com computador foi em casa. Tinhamos uma pilha de disquete :D</p>
            </div>
            <div className={styles.card3}>
              <h2>O primeiro computador</h2>
              <p>Após muito tempo e esforço, meus pais compraram um computador novo </p>
            </div>
            <div className={styles.card5}>
              <h2>Entendimento do conceito de igualdade</h2>
              <p>O que seria justo? </p>
            </div>
          </div>
          <div className={styles.down}>
            <div className={styles.card2}>
              <h2>Jogos e VideoGames</h2>
              <p>Eu não tinha jogos e nem consoles, então jogava no console de colegas.</p>
            </div>
            <div className={styles.card4}>
              <h2>Falta de Recursos X Vontade de Aprender</h2>
              <p>Durante a infancia e adolescência tive dificuldades no aprendizado por conta da falta de recursos </p>
            </div>

          </div>

        </div>

      </main >

      <Footer styles={styles} />
    </div >
  );
}

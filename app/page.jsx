import styles from './ui/styles/Home.module.css';
import Header from './ui/Header';
import Footer from './ui/Footer';
import Logo from './ui/Logo';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header styles={styles} />
      <main className={styles.main}>
        <aside className={styles.aside}>
          <p className={styles.subtitle}>E aí, pessoal, tudo bem? Eu sou o</p>
          <h1 className={styles.title}>João Victor Francisco</h1>
          <h2 className={styles.occupation}> &gt; Desenvolvedor </h2>
          <p className={styles.description}>&gt; jvsfrancisco@note-jv:~$ ls </p>
          <p className={styles.description}>emp1504 inf1016 inf1018 inf1036  </p>
          <p className={styles.description}>inf1048 psi1958</p>
          <p className={styles.description}>&gt; jvsfrancisco@note-jv:~$ cd psi1958 </p>
          <p className={styles.description}>&gt; jvsfrancisco@note-jv:~$ cd voce-sa </p>
          <p className={styles.description}>&gt; jvsfrancisco@note-jv:~$ code . </p>
          <Link className={styles.npm} href="/bio/familia">
            Npm start
            <Image
              src="/arrow-right-line.svg"
              alt="Npm Start"
              width={20}
              height={20}
              priority
              />
          </Link>
        </aside>
        <Logo styles={styles}/>

      </main>
      <Footer styles={styles} />
    </div>
  );
}
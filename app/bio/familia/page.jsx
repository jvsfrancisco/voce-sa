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
      <main className={styles.main}>
        <Navbar styles={styles} />


        <div className={styles.snippets}>
          <p className={styles.snippetsTitle}>// Função de Criação do João:</p>
          <div className={styles.snippet}>
            <div className={styles.snippetContent}>
              <pre className={styles.snippetCode}>
                <p className={styles.snippetCode}>
                  {`function CreateJV(irmaos, cachorro, curso, profissao, hobbies) {
                    return { nome: "João", irmaos, cachorro, curso, profissao, hobbies };
                  }
                  \nirmaos = [&quot;José&quot;, &quot;Juliane&quot;, &quot;Julieny&quot;];
                  \ncachorro = &quot;Marlley&quot;;
                  \ncurso = &quot;Ciência da Computação&quot;;
                  \nprofissao = &quot;Desenvolvedor Web Fullstack&quot;;
                  \nhobbies = [&quot;Tecnologia&quot;, &quot;Inovação&quot;, &quot;Instrumentos Musicais&quot;];
                  \nCreateJV(irmaos, cachorro, curso, profissao, hobbies);`}
                </p>
              </pre>
            </div>
            <div className={styles.bkgmarlley}>
              <Image className={styles.marlley} src="/coragem.png" alt="Marlley" width={200} height={200} />
            </div>
          </div>
        </div>

      </main>

      <Footer styles={styles} />
    </div>
  );
}

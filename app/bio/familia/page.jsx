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
                <code>
                  {`function CreateJV(irmaos, cachorro, curso, profissao, hobbies) {
  return { nome: "João", irmaos, cachorro, curso, profissao, hobbies };
}
pais = ["João Leôncio Francisco", "Risonadia da Silva"];
irmaos = ["José", "Juliane", "Julieny"];
cachorro = "Marlley";
curso = "Ciência da Computação";
profissao = "Dev";
hobbies = ["Tecnologia", "Inovação", "Instrumentos Musicais", "Desenhos Animados"];

CreateJV(irmaos, cachorro, curso, profissao, hobbies);`}
                </code>
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

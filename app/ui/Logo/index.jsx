import Image from "next/image";

export default function Logo({ styles }) {
  return (
    <aside className={styles.asidelogo}>
      <section className={styles.logo}>
        <article className={styles.bckglogo}>
          <Image
            src="/J5.png"
            alt="J5"
            className={styles.imglogo}
            width={500}
            height={500}
            priority
          />
          <div className={styles.bckgslogan}>
            <p className={styles.slogan}> Tecnologia com Equidade</p>
          </div>
          <p className={styles.slogansubtitle}>&gt; Oportunidade para Todos</p>
        </article>
      </section>
    </aside>
  );
}

const igualdade = 'Oportunidades Iguais';
const equidade = 'Oportunidades Equitativas';
igualdade == equidade; // false


{/* */}
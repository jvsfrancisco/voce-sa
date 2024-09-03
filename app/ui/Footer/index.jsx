import Image from "next/image";

export default function Footer({ styles }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <Image src="/linkedin-fill.png" alt="Social Media Icon"  width={25} height={25}/>
        <Image src="/github-fill.png" alt="Social Media Icon"  width={25} height={25}/>
        <p className={styles.username}>@jvsfrancisco</p>
      </div>
      
    </footer>
  );
}
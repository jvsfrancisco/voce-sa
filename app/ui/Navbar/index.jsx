import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Link from 'next/link';
import SchoolIcon from '@mui/icons-material/School';
import UpdateIcon from '@mui/icons-material/Update';
import ComputerIcon from '@mui/icons-material/Computer';

export default function Navbar({ styles }) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sectionTitle}>Minha História</h2>
      <ul className={styles.sectionList}>
        <Link href="/bio/familia" className={styles.sectionItem}><FamilyRestroomIcon /> Familia </Link>
        <Link href="/bio/infancia" className={styles.sectionItem}><ComputerIcon /> Infancia</Link>
        <Link href="/bio/escola" className={styles.sectionItem}><SchoolIcon /> Escola</Link>
        <Link href="/bio/futuro" className={styles.sectionItem}><UpdateIcon /> Futuro</Link>
      </ul>
    </div>
  )
}
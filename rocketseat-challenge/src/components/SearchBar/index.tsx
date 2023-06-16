import Image from 'next/image'
import styles from './styles.module.css'
import searchIcon from '../../../public/assets/searchIcon.svg'

export default function SearchBar() {
  return (
    <div className={styles.searchBarWrapper}>
      <input className={styles.searchInput} type="text" placeholder="Procurando por algo específico?" />
      <div className={styles.iconWrapper}>
        <Image src={searchIcon} alt="Search Icon" />
      </div>
    </div>
  )
}

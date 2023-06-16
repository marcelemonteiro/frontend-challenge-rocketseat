import SearchBar from '../SearchBar'
import Image from 'next/image'
import cartIcon from '../../../public/assets/cartIcon.svg'
import { Saira_Stencil_One } from 'next/font/google'
import Link from 'next/link'
import styles from './styles.module.css'

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={`${sairaStencilOne.className} ${styles.title}`}>
        <Link href="/">capputeeno</Link>
      </h1>
      <SearchBar />
      <div className={styles.cartButtonWrapper}>
        <button className={styles.cartButton}>
          <Image src={cartIcon} alt="Cart Icon" />
        </button>
        <div className={styles.cartItemSign}>2</div>
      </div>
    </header>
  )
}

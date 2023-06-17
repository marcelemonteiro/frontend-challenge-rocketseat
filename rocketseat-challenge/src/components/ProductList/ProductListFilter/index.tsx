"use client"

import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.css'
import arrowIcon from '../../../../public/assets/arrowIcon.svg'
import { useState } from 'react'

export default function ProductListFilter() {
  const [isDropdownActive, setIsDropdownActive] = useState(false)

  const handleClick = () => {
    if (isDropdownActive) {
      setIsDropdownActive(false)
    } else {
      setIsDropdownActive(true)
    }
  }

  return (
    <div className={styles.filter}>
      <div className={styles.nav}>
        <Link href="/" className={styles.active}>Todos os produtos</Link>
        <Link href="/products/camisetas">Camisetas</Link>
        <Link href="/products/canecas">Canetas</Link>
      </div>
      <div className={styles.dropdown}>
        <button onClick={handleClick}>
          Organizar por 
          <Image src={arrowIcon} alt="Arrow Icon" />
        </button>
        <div className={`${styles.dropdownMenu} ${isDropdownActive && styles.activeDropdown}`}>
          <Link href="">Novidades</Link>
          <Link href="">Preço: Maior - menor</Link>
          <Link href="">Preço: Menor - maior</Link>
          <Link href="">Mais vendidos</Link>
        </div>
      </div>
    </div>
  )
}

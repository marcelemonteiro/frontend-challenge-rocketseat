'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';

import styles from './styles.module.css';
import arrowIcon from '../../../../public/assets/arrowIcon.svg';
import { useEffect, useState } from 'react';

export default function ProductListFilter() {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const pathName = usePathname()

  const handleClick = () => {
    if (isDropdownActive) {
      setIsDropdownActive(false);
    } else {
      setIsDropdownActive(true);
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.nav}>
        <Link href="/" className={styles.active}>
          Todos os produtos
        </Link>
        <Link href="/camisetas">Camisetas</Link>
        <Link href="/canecas">Canetas</Link>
      </div>
      <div className={styles.dropdown}>
        <button onClick={handleClick}>
          Organizar por
          <Image src={arrowIcon} alt="Arrow Icon" />
        </button>
        <div
          className={`${styles.dropdownMenu} ${
            isDropdownActive && styles.activeDropdown
          }`}
        >
          <Link href={{ pathname: pathName, query: { orderby: 'novidades' } }}>Novidades</Link>
          <Link href={{ pathname: pathName, query: { orderby: 'maior' } }}>Preço: Maior - menor</Link>
          <Link href={{ pathname: pathName, query: { orderby: 'menor' } }}>Preço: Menor - maior</Link>
          <Link href={{ pathname: pathName, query: { orderby: 'populares' } }}>Mais vendidos</Link>
        </div>
      </div>
    </div>
  );
}

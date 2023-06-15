import { SearchBarWrapper, SearchInput, IconWrapper } from './style'
import Image from 'next/image'
import searchIcon from '../../../public/assets/searchIcon.svg'

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchInput type="text" placeholder="Procurando por algo específico?" />
      <IconWrapper>
        <Image src={searchIcon} alt="Search Icon" />
      </IconWrapper>
    </SearchBarWrapper>
  )
}

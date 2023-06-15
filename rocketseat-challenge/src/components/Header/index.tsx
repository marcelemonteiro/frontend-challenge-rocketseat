import SearchBar from '../SearchBar'
import Image from 'next/image'
import cartIcon from '../../../public/assets/cartIcon.svg'
import {
  HeaderComponent,
  Title,
  CartButtonWrapper,
  CartButton,
  CartItemsSign,
} from './style'
import { Saira_Stencil_One } from 'next/font/google'
import Link from 'next/link'

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Header() {
  return (
    <HeaderComponent>
      <Title className={sairaStencilOne.className}>
        <Link href="/">capputeeno</Link>
      </Title>
      <SearchBar />
      <CartButtonWrapper>
        <CartButton>
          <Image src={cartIcon} alt="Cart Icon" />
        </CartButton>
        <CartItemsSign>2</CartItemsSign>
      </CartButtonWrapper>
    </HeaderComponent>
  )
}

import StyledComponentsRegistry from './registry'
import { GlobalStyles } from '../styles/globals'
import { Saira } from 'next/font/google'

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata = {
  title: 'Frontend Challenge da Rocketseat',
  description: 'Desafio Front End da Rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

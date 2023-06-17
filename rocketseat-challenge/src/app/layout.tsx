import './globals.css';
import { Saira } from 'next/font/google';

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata = {
  title: 'Capputeeno',
  description: 'Desafio Front End da Rocketseat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>{children}</body>
    </html>
  );
}

import Header from "@/components/Header"
import ProductListFilter from "@/components/ProductList/ProductListFilter"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <ProductListFilter />
      {children}
    </>
  )
}
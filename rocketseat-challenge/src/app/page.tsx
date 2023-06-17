import { getClient } from "@/client";
import { BASE_PRODUCTS } from "@/queries";

import Header from '@/components/Header';
import ProductListFilter from '@/components/ProductList/ProductListFilter';

interface HomeProps {
  searchParams?: {
    orderby: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const { data } = await getClient().query({ query: BASE_PRODUCTS });

  return (
    <>
      <Header />
      <ProductListFilter />
    </>
  );
}

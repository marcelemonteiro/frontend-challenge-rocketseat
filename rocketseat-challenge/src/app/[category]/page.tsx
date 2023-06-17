interface CategoryProps {
  params?: {
    category: string;
  };
  searchParams?: {
    orderby: string;
  };
}

export default function ProductListByCategory({
  params,
  searchParams,
}: CategoryProps) {
  return (
    <>
      <div>{params && params.category}</div>
      <div>{searchParams && searchParams.orderby}</div>
    </>
  );
}

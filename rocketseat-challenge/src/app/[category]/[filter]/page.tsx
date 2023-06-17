interface FilterProps {
  params: {
    filter: string
  }
}

export default function ProductListFiltered({ params }: FilterProps) {
  return (
    <div>{params.filter}</div>
  )
}
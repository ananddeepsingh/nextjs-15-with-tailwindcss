interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <>
      Product Page {slug} sortOrder {sortOrder}
    </>
  );
};

export default ProductPage;

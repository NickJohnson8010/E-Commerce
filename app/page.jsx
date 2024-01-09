import axios from 'axios';
import ListProducts from '@/components/product/listProduct';
import queryString from 'query-string';

const getProduct = async (searchParams) => {
  const urlParams = {
    keyword: searchParams?.keyword,
    page: searchParams?.page,
    category: searchParams?.category,
    'ratings[gte]': searchParams?.ratings,
    'price[gte]': searchParams?.min,
    'price[lte]': searchParams?.max,
  };
  const searchQuery = queryString.stringify(urlParams);
  const { data } = await axios.get(
    `${process.env.API_URL}/api/product?${searchQuery}`
  );
  return data;
};
export default async function Home({ searchParams }) {
  const productData = await getProduct(searchParams);
  return <ListProducts data={productData} />;
}

import Head from 'next/head'; 
import ItemList from '@/components/itemList';
import { InferGetStaticPropsType } from 'next';
import { getServerEndpoint } from '@/constants';
import { ProductExample } from '@/types/products';

export const getStaticProps = async () => { 
  const res = await fetch(`${getServerEndpoint()}/api/products`);

  const data: ProductExample[] = await res.json();

  return {
    props: {
      items: data,
    }
  };
};

export default function Store(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const items = props.items;

  return (
    <>
      <Head>
        <title>Static store</title>
      </Head>
      <ItemList
        items={items}
        baseUrl="staticStore"
      />
    </>
  );
}
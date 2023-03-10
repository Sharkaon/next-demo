import { getServerEndpoint } from "@/constants";
import { Product, ProductExample } from "@/types/products";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Inter } from '@next/font/google'
import styles from '@/styles/Product.module.css';

const inter = Inter({ subsets: ['latin'] })

export const getStaticPaths = async () => {
  const res = await fetch(`${getServerEndpoint()}/api/products`);

  const data: ProductExample[] = await res.json();

  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const params = context.params;

  if (!params) {
    return {
      props: {
        product: null,
      },
    // Gera uma nova versão ao receber uma request após 10 segundos dps da ultima request
    // revalidate: 10
    };
  }

  const res = await fetch(`${getServerEndpoint()}/api/products/${params.id}`);

  const data: Product = await res.json();

  return {
    props: {
      product: data,
    }
  };
};

const StaticProduct = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!props.product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.info}>
      <h1 className={inter.className}>{props.product.name}</h1>
      <p className={inter.className}>R$: {props.product.price}</p>
      <p className={inter.className}>
        {props.product.description ? props.product.description : 'Nada a comentar'}
      </p>
    </div>
  );
};

export default StaticProduct;

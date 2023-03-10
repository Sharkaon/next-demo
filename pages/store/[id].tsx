import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType
} from "next";

import { getServerEndpoint } from "@/constants";

import type { Product } from "@/types/products";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.query;

  const res = await fetch(`${getServerEndpoint()}/api/products/${id}`);

  const data: Product = await res.json();

  return {
    props: {
      product: data,
    }
  };
}

export default function ProductPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  if (!props.product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <h1>{props.product.name}</h1>
      <p>R$: {props.product.price}</p>
      <p>{props.product.description ? props.product.description : 'Nada a comentar'}</p>
    </>
  );
}

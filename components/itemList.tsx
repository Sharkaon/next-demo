import { ProductExample } from "@/types/products";
import { NextPage } from "next";
import styles from '@/styles/Store.module.css';
import Link from "next/link";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


interface Props {
  items: ProductExample[];
  baseUrl: string;
}

const ItemList: NextPage<Props> = (props) => {
  const {
    items,
    baseUrl
  } = props;

  return (
    <div
      className={styles.main}
    >
      { items.map((item) => (
          <Link
            key={item.id}
            href={`/${baseUrl}/${item.id}`}
            className={styles.card}
          >
            <span className={inter.className}>{ item.name }</span>
          </Link>
        )) }
    </div>
  );
};

export default ItemList;

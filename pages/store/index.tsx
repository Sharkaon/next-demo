import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Store.module.css';

export default function Store() {
  // Array de 1 a 10
  const items = new Array(10).fill(0).map((_, i) => i + 1);

  return (
    <>
      <Head>
        <title>Store</title>
      </Head>
      <div
        className={styles.main}
      >
        { items.map((item) => (
            <Link
              key={item}
              href={`/store/${item}`}
              className={styles.card}
            >
              Item {item}
            </Link>
          )) }
      </div>
    </>
  );
}

import Layout from "../../components/Layout";
import styles from "./CryptoPage.module.css";
const Coin = ({ props }) => {
  return (
    <Layout>
      <div className={styles.crypto_page}>
        <div className={styles.crypto_container}>
          <img
            src={props.image.large}
            alt={props.name}
            className={styles.crypto_img}
          />
          <h1 className={styles.crypto_title}>{props.name}</h1>
          <p className={styles.crypto_ticker}>{props.symbol}</p>
          <p className={styles.crypto_curr}>
            {props.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}

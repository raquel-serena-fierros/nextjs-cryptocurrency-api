import styles from "./Crypto.module.css";
import Link from "next/link";

const Crypto = ({
  title,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceUpdate,
  id,
}) => {
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className={styles.crypto_container}>
          <div className={styles.crypto_row}>
            <div className={styles.crypto}>
              <img src={image} alt={title} className={styles.crypto_img} />
              <h1 className={styles.crypto_text}>{title}</h1>
              <p className={styles.crypto_ticker}>{symbol}</p>
            </div>
            <div className={styles.crypto_data}>
              <p className={styles.crypto_price}>${price}</p>
              <p className={styles.crytpo_volume}>${volume.toLocaleString()}</p>
              {priceUpdate < 0 ? (
                <p className={(styles.crypto_percent, styles.red)}>
                  {priceUpdate.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.crypto_percent, styles.green)}>
                  {priceUpdate.toFixed(2)}%
                </p>
              )}
              <p className={styles.crypto_marketcap}>
                Market Cap: ${marketcap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Crypto;

import Crypto from "./CryptoInfo/Crypto";

export default function CryptoList({ filteredCrypto }) {
  return (
    <>
      {filteredCrypto.map((prop) => {
        return (
          <Crypto
            key={prop.id}
            title={prop.title}
            id={prop.id}
            price={prop.current_price}
            symbol={prop.symbol}
            marketcap={prop.market_cap}
            volume={prop.total_volume}
            image={prop.image}
            priceUpdate={prop.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}

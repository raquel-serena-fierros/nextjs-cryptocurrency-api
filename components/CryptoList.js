import Crypto from "./CryptoInfo/Crypto";

export default function CryptoList({ filteredCrypto }) {
  return (
    <>
      {filteredCrypto.map((props) => {
        return (
          <Crypto
            key={props.id}
            title={props.name}
            id={props.id}
            price={props.current_price}
            ticker={props.symbol}
            marketcap={props.market_cap}
            volume={props.total_volume}
            image={props.image}
            priceUpdate={props.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}

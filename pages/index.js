import { useState } from "react";
import Layout from "../components/Layout";
import CryptoList from "../components/CryptoList";
import Search from "../components/SearchBar/Search";

export default function Home({ filteredCrypto }) {
  const [search, setSearch] = useState("");

  const allCryptos = filteredCrypto.filter((props) =>
    props.name.toLowerCase().includes(search.toLowerCase())
  );
  const userSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <div className='coin_app'>
      <Layout />
      <Search
        type='text'
        placeholder='Search Cryptocurrency'
        onInput={userSearch}
      />
      <CryptoList filteredCrypto={allCryptos} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  );

  const filteredCrypto = await res.json();

  return {
    props: {
      filteredCrypto,
    },
  };
};

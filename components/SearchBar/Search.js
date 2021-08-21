import styles from "./Search.module.css";

const gradient = {
  background: "linear-gradient(to right,#16c6e6,#7918f2, #ac32e4)",
};
const Search = ({ ...rest }) => {
  return (
    <div className={styles.coin_search}>
      <input style={gradient} className={styles.coin_input} {...rest} />
    </div>
  );
};

export default Search;

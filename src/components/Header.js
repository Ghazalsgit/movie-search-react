import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import TheCart from "./TheCart";
import styles from "./Header.css";

const Header = () => {
  const { cart, visiableCart, setVisiableCart } = useContext(AppContext);

  function toggle() {
    setVisiableCart((prevState) => !prevState);
  }

  return (
    <div style={styles} className="header">
      <h1 className="title">Ghibli Movies</h1>

      <section className="cart">
        <h3 onClick={toggle} className="cart-num">
          {cart.length} liked {cart.length === 1 ? "movie" : "movies"}
        </h3>
        {visiableCart ? <TheCart /> : null}
      </section>
    </div>
  );
};
export default Header;

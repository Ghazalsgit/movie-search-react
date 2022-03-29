import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import TheCart from "./TheCart";
import styles from "./Header.css";

const Header = () => {
  const { cart, visibleCart, setVisibleCart } = useContext(AppContext);

  function toggle() {
    setVisibleCart((prevState) => !prevState);
  }

  return (
    <div style={styles} className="header">
      <h1 className="title">Ghibli Movies</h1>
      <section className="cart">
        <h3 onClick={toggle} className="cart-num">
          {cart.length} liked {cart.length === 1 ? "movie" : "movies"}
        </h3>
        {visibleCart ? <TheCart /> : null}
      </section>
    </div>
  );
};
export default Header;

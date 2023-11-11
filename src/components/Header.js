import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import TheCart from "./TheCart";
import styles from "./Header.css";
import img from "../img/output-onlinepngtools.png";

const Header = () => {
  const { cart, visibleCart, setVisibleCart } = useContext(AppContext);

  function toggle() {
    setVisibleCart((prevState) => !prevState);
  }

  return (
    <div style={styles} className="header">
      <img src={img} className="iiimgg" alt="ghibli" />
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

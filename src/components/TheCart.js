import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import styles from "./theCart.css";

function TheCart() {
  const { visiableCart, cart, setCart } = useContext(AppContext);

  function removeFromFavourites(id) {
    const cloneCart = [...cart];
    const indexOfItem = cloneCart.indexOf();
    if (indexOfItem === -1) {
      cloneCart.splice(id, 1);
      setCart(cloneCart);
    }
  }

  return (
    <div style={styles} className="the-cart">
      {visiableCart ? (
        <>
          {cart.map((film, index) => (
            <div >
              <li className="list-item" key={index}>
                {film.title}
                <button
                  className="the-cart-button"
                  onClick={() => removeFromFavourites(index)}
                >
                  Remove
                </button>
              </li>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default TheCart;

import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import styles from "./theCart.css";
import { Link } from "react-router-dom";

function TheCart() {
  const { visibleCart, cart, setCart } = useContext(AppContext);

  function removeFromSaves(id) {
    const cloneCart = [...cart];
    const indexOfItem = cloneCart.indexOf();
    if (indexOfItem === -1) {
      localStorage.removeItem("films"); 
      cloneCart.splice(id, 1);
      setCart(cloneCart);
    }
  }

  return (
    <div style={styles} className="the-cart">
      {visibleCart ? (
        <>
          {cart.map((film, index) => (
            <div>
              <p className="list-item" key={index}>
                <Link to={`/Movie/${film.id}`}>{film.title}</Link>
                <button
                  className="the-cart-button"
                  onClick={() => removeFromSaves(index)}
                >
                  Remove
                </button>
              </p>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default TheCart;

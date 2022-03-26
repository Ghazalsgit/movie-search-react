import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

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
    <div className="hallo">
      {visiableCart ? (
        <>
          {cart.map((film, index) => (
            <li key={index}>
              {film.title}
              <button onClick={() => removeFromFavourites(index)}>
                Remove
              </button>
            </li>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default TheCart;

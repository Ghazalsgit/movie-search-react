import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

function TheCart(props) {
  const { films, setShoppingCartNumber, setCart, cart } =
    useContext(AppContext);

  let show = false;
  function toggleShow() {
    show = !show;
  }
  //cart.splice(id, 1) för att ta bort från arrayen??

  return (
    <div className="hallo" onClick={toggleShow}>
      {show ? (
        <div className="cart-div">
          <h1>{props.cart.title}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default TheCart;

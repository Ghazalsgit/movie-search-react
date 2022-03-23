import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import TheCart from "./TheCart";

const Header = () => {
  const { shoppingCartNumber, cart } = useContext(AppContext);

  return (
    <div className="header">
      <h1 className="title">Ghibli Studio Shop</h1>
      <h3 className="cart-num">{shoppingCartNumber}</h3>
      <TheCart cart={cart} />
    </div>
  );
};
export default Header;

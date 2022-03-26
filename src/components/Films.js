import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Films = () => {
  let navigate = useNavigate();
  const { films, setShoppingCartNumber, setCart, cart } =
    useContext(AppContext);

  function addToCart(film) {
    const indexOf = cart.indexOf(film);
    let id = film.id;
    const cloneCart = [...cart];

    if (indexOf === -1) {
      setShoppingCartNumber((prevCount) => prevCount + 1);
      setCart([...cart, film]);
    } else {
      cloneCart.splice(id, 1);
      setCart(cloneCart);
    }
  }
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const filmsData = films.map((film) => {
    return (
      <div key={film.id} className="film-container">
        <h3>{film.title}</h3>
        <img
          className="pic"
          src={film.image}
          alt="movie-pic"
          onClick={() => navigate(`/Movie/${film.id}`)}
        />
        <button onClick={() => addToCart(film)}>
          {cart.indexOf(film) ? "Like" : "Unlike"}
        </button>
      </div>
    );
  });

  return <div className="film-container">{filmsData}</div>;
};
export default Films;

import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import styles from "./Films.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Films = () => {
  let navigate = useNavigate();
  const { films, setCart, cart } = useContext(AppContext);

  function addToCart(film) {
    let id = film.id;
    const cloneCart = [...cart];
    const indexOf = cloneCart.indexOf(film);

    if (indexOf === -1) {
      setCart([...cloneCart, film]);
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
      <div style={styles} key={film.id} className="film-container-small">
        <div className="all-films">
          <div className="container">
            <img
              className="pic-film"
              src={film.image}
              alt="movie-pic"
              onClick={() => navigate(`/Movie/${film.id}`)}
            />
            <button className="btn"><FontAwesomeIcon style={{color:"black"}} onClick={() => navigate(`/Movie/${film.id}`)} icon={faPlay}/></button>
          </div>
          <div className="info-film">
            <h3 className="title-film">{film.title}</h3>
            <h4 className="info-film-detail">Year: {film.release_date}</h4>
            <h4 className="info-film-detail">Director: {film.director}</h4>
            <button className="button-film" onClick={() => addToCart(film)}>
              {cart.indexOf(film) ? "Save" : "Unsave"}
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div className="film-container">{filmsData}</div>;
};
export default Films;

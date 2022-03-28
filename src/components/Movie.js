import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useParams } from "react-router-dom";
import styles from "./Movie.css";
import { useNavigate } from "react-router-dom";

function Movie() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { films, setCart, setShoppingCartNumber, cart } =
    useContext(AppContext);

  function addToCart(film) {
    const indexOf = cart.indexOf(film);

    if (indexOf === -1) {
      setShoppingCartNumber((prevCount) => prevCount + 1);
      setCart([...cart, film]);
    } else {
      console.log("Finns redan");
    }
  }

  const detailedMovie = films.map((film) => {
    if (film.id === id) {
      return (
        <div key={film.id} style={styles} className="detailed-movie">
          <div className="go-back" onClick={() => navigate("/")}>Go back</div>
          <div className="example">
            <img className="img-movie" src={film.movie_banner} />
            <div className="overlay"></div>
          </div>
          <h1 className="title-movie">{film.title}</h1>
          <h1 className="title-movie-2">{film.original_title}</h1>
          <p className="rotten">Rotten tomatoes: {film.rt_score}</p>
          <p className="running">Running time: {film.running_time} minutes</p>
          <div className="hello">
            <h3 className="director-movie">{film.director}</h3>
            <h3 className="date-movie">{film.release_date}</h3>
          </div>
          <p className="description-movie">{film.description}</p>
          <div className="hllo">
            <button className="button-movie">Watch movie</button>
            <button className="button-movie">Watch trailer</button>
          </div>
        </div>
      );
    } else {
      console.log("ERROR");
    }
  });

  return <div>{detailedMovie}</div>;
}

export default Movie;

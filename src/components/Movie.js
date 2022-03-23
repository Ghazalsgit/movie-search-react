import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useParams } from "react-router-dom";


function Movie() {
  let { id } = useParams();

  const { films } = useContext(AppContext);

  const detailedMovie = films.map((film) => {
    if (film.id === id) {
      return (
        <div key={film.id} className="detailed-movie">
          <h1>{film.title}</h1>
          <img src={film.movie_banner} />
          <h2>{film.release_date}</h2>
          <h2>{film.director}</h2>
          <p>{film.description}</p>
        </div>
      );
    } else {
      console.log("ERROR");
    }
  });

  return <div>
      
      {detailedMovie}
      </div>;
}

export default Movie;

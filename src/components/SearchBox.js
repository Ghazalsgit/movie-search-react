import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function SearchBox() {
  const { films, setFilms } = useContext(AppContext);

  function handleChange(event) {
    const value = event.target.value;

    const theSearchedFilm = films.filter((film) => {
      const theTitle = film.title;
      if (theTitle.includes(value)) {
        setFilms(theSearchedFilm);
      }
    });
  }

  return (
    <div className="search-box">
      <input type="text" onChange={handleChange} placeholder={<FontAwesomeIcon icon={faSearch}/>} />
      
    </div>
  );
}

export default SearchBox;

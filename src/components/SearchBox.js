import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBox.css"


function SearchBox() {
  
  const {
    searchValue,
    setSearchValue,
    films,
    setFilms,
    filmsDefault,
    setFilmsDefault,
  } = useContext(AppContext);

  function handleChange(theValue) {
    let searched;

    setSearchValue(theValue);
    if (theValue.length < 3) {
      setFilms(filmsDefault);
    } else {
      searched = films.filter((data) => {
        return data.title.toLowerCase().includes(searchValue.toLowerCase());
      });

      setFilms(searched);
    }
  }

  useEffect(() => {
    console.log(films);
  }, [films]);

  return (
    <div style={styles} className="search-box">
      <FontAwesomeIcon icon={faSearch} style={{color:"white", padding:"13px", fontSize:"20px"}}/>
      <input className="input-search"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search..."
      />
      
    </div>
  );
}

export default SearchBox;

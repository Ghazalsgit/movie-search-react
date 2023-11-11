import { useState, useEffect } from "react";
import Header from "./components/Header";
import Films from "./components/Films";
import SearchBox from "./components/SearchBox";
import { AppContext } from "./contexts/AppContext";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [films, setFilms] = useState([]);
  const [shoppingCartNumber, setShoppingCartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [visibleCart, setVisibleCart] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filmsDefault, setFilmsDefault] = useState([]);
  console.log(searchValue);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films/")
      .then((data) => data.json())
      .then((data) => {
        setFilms(data);
        setFilmsDefault(data);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        films,
        setFilms,
        shoppingCartNumber,
        setShoppingCartNumber,
        cart,
        setCart,
        visibleCart,
        setVisibleCart,
        searchValue,
        setSearchValue,
        setFilmsDefault,
        filmsDefault,
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <SearchBox />
                <Films />
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <>
                <Movie />
              </>
            }
          />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

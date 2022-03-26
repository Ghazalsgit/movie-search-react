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
  const [visiableCart, setVisiableCart] = useState(false)

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then((data) => data.json())
      .then((data) => setFilms(data));
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
        visiableCart, 
        setVisiableCart
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
                <Header />
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

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Films from "./components/Films";
import TheCart from "./components/TheCart";
import { AppContext } from "./contexts/AppContext";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  const [films, setFilms] = useState([]);
  const [shoppingCartNumber, setShoppingCartNumber] = useState(0);
  const [cart, setCart] = useState([]);

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
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
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

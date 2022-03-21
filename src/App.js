import {useState, useEffect} from 'react'
import Header from "./components/Header"
import Films from "./components/Films"
import { AppContext } from "./contexts/AppContext"
import Movie from "./components/Movie"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
const [films, setFilms] = useState([])
const [shoppingCartNumber, setShoppingCartNumber] = useState(0)
const [cart, setCart] = useState([])


useEffect(() => {
  fetch("https://ghibliapi.herokuapp.com/films/")
  .then(data => data.json())
  .then(data => setFilms(data))
}, [])

  return (
  <Router>
    <Routes>
      <Route path="/" element={<AppContext.Provider value={{films, setFilms, shoppingCartNumber, setShoppingCartNumber, cart, setCart}}>
      <Header />
      <Films />
      </AppContext.Provider>}/>
      <Route path="/movie" element={<Movie />}/>
    </Routes>
    </Router>
  );
}

export default App;

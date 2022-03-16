import {useState, useEffect} from 'react'
import Header from "./components/Header"
import Films from "./components/Films"

function App() {

const [films, setfilms] = useState([])
useEffect(() => {
  fetch("https://ghibliapi.herokuapp.com/films/")
  .then(data => data.json())
  .then(data => setfilms(data))
}, [])

  return (
    <div>
      <Header />
      <Films filmInfo={films}/>
    </div>
  );
}

export default App;

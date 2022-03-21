import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/AppContext"
import {useNavigate, useParams} from "react-router-dom"
const Films = () => {

    let {id} = useParams()
    let navigate = useNavigate()
    const { films, setShoppingCartNumber, setCart, cart } = useContext(AppContext)
     
    function addToCart (film) {
        setShoppingCartNumber(prevCount => prevCount + 1)
        setCart([...cart, film])  
    }
    useEffect(() => {
        console.log(cart)
    }, [cart])

    const filmsData = films.map(film => {
        return(
            <div key={film.id}>
            <img className="pic" src={film.image} alt="movie-pic" onClick={() => {navigate("/Movie")}}/>
            <h3>{film.title}</h3>
            <button onClick={() => addToCart(film)}>Add to cart</button>
            </div>
        )
    })

    return (
        <div className="film-container">
            {filmsData} 
        </div>
    )
}
export default Films


            //     <h2>{details.title}</h2>
            //    <h3>{details.director}</h3>
            //    <h4>{details.release_date}</h4>
            //    <p>{details.description}</p>
            //    <img src={details.movie_banner}/>
import {useContext} from "react"
import {AppContext} from "../contexts/AppContext"
import Picker from 'emoji-picker-react';

const Header = () => {
    const {shoppingCartNumber} = useContext(AppContext)

    return (
        <div className="header">
            <h1 className="title">Ghibli Studio Shop</h1>
            <h3 className="cart-num">{shoppingCartNumber}</h3>
        </div>
    )
    
}
export default Header
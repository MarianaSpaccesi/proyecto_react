import { CartWidget } from "./cartWidget/CartWidget"


const NavBar = () =>{

    return <header className="navBar-Main">
    <nav>
        <ul className="navBar-ul">
            <li>Home</li>
            <li>Compra</li>
            <li>Venta</li>
            <li>Fabricacion</li>
        </ul>
    </nav>
    <CartWidget/>
    </header>
}

export default NavBar
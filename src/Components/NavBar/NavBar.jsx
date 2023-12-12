import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (

        <nav className="d-flex justify-content-around p-4">
            <div>
            <img src="/imgs/voh.png" alt="" style={{width: "100px"}}/>   
            <h1> Victims of horror </h1>             
            </div>
            <NavLink to="/">
            <button className="btn btn-success mx-2"> Home </button>
            </NavLink>            
            <NavLink to="/characters/alive">            
            <button className="btn btn-success mx-2"> Dead </button>
            </NavLink>
            <NavLink to="/characters/dead">            
            <button className="btn btn-success mx-2"> Alive </button> 
            </NavLink>
            <div>
                <CartWidget/>
            </div>
         </nav>
    )
}
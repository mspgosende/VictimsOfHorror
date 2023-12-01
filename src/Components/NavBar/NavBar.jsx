import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav className="d-flex justify-content-around p-4">
            <img src="/imgs/voh.png" alt="" style={{width: "100px"}}/>
            <div>
            <button className="btn btn-success mx-2"> Home </button>
            <button className="btn btn-success mx-2"> About </button>
            <button className="btn btn-success mx-2"> Subgenres </button>
        </div>
            <CartWidget/>
        </nav>
    )
}
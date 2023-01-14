import NavItem from "./NavItem";
import "./navbar.css";
import { Link } from "react-router-dom";
import Bag from "./Bag";


function NavBar() {

  return (
    <nav>
      <div className='menu-bar row align-items-center'>
        <div class="dropdown col">
          <button class="btn btn-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-bars"></i>
          </button>
          <ul class="dropdown-menu">
            <li> <NavItem to="/"> Playeras </NavItem></li>
            <li> <NavItem to="/"> Accesorios </NavItem></li>
            <li> <NavItem to="/"> Nosotros </NavItem></li>
          </ul>
        </div>
        <div className="logo col text-center">
            <Link to="/">
              <h1>Tienda Padrisima</h1>
            </Link>
        </div>
        <div className="bag col text-end">
          <Bag></Bag>
        </div>
      </div>
    </nav>

  );
}

export default NavBar;

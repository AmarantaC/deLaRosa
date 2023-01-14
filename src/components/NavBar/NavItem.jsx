import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => {
  // text = {text: "Calzado"}

  return (
    <li className="dropdown-item">
     <Link className="nav-link" href={to}>
      {children}
      </Link>
  </li>

  );
};

export default NavItem;

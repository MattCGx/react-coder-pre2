import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import CartWidget from "../CartWidget/CartWidget"; 
import { Link } from "react-router-dom";

const NavbarContainer = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link to="/">
          <p className="font-bold text-inherit">MCGX 3D</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem>
          <Link to="/category/Impresoras">
            <button  className="buttonGhostBlue hover:shadow-lg hover:shadow-indigo-500/50" color="primary">
              Impresoras
            </button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/category/Insumos">
            <button className="buttonGhostBlue hover:shadow-lg hover:shadow-indigo-500/50 " color="primary">
              Insumos
            </button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/category/repuestos">
            <button className="buttonGhostBlue hover:shadow-lg hover:shadow-indigo-500/50" color="primary">
              Repuestos
            </button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <CartWidget/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarContainer;

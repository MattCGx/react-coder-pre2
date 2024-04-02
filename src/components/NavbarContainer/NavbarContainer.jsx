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
          <Link
            to="/category/Impresoras"
            className="buttonGhostViolet hover:shadow-md hover:shadow-indigo-500/50"
          >
            Impresoras
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/category/Insumos"
            className="buttonGhostViolet hover:shadow-md hover:shadow-indigo-500/50"
          >
            Insumos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/category/repuestos"
            className="buttonGhostViolet hover:shadow-md hover:shadow-indigo-500/50"
          >
            Repuestos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <CartWidget />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarContainer;

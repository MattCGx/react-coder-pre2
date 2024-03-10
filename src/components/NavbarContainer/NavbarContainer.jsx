import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
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
            <Button className="hover:shadow-lg focus:shadow-indigo-500/50" variant="ghost" color="primary">
              Impresoras
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/category/Insumos">
            <Button className="hover:shadow-lg focus:shadow-indigo-500/50" variant="ghost" color="primary">
              Insumos
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/category/repuestos">
            <Button className="hover:shadow-lg focus:shadow-indigo-500/50" variant="ghost" color="primary">
              Repuestos
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <CartWidget cartCount="0"/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarContainer;

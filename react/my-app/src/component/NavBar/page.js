import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


const customNavBar=()=>{
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Facebook</p>
      </NavbarBrand>
      <NavbarContent className= "flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
export default customNavBar;
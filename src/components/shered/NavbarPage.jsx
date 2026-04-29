import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import logo from '../../assets/logo.jpg'
import Image from 'next/image';

const NavbarPage = () => {
    return (
        <div>
            <Navbar>
                <NavbarBrand>
                    {/* <Logo />
                    <p className="font-bold">ACME</p> */}
                    <Image src={logo} alt='logo' width={100} height={100}></Image>
                </NavbarBrand>
                <NavbarContent>
                    <NavbarItem><Link href="#">Features</Link></NavbarItem>
                    <NavbarItem><Link href="#">Pricing</Link></NavbarItem>
                </NavbarContent>
            </Navbar>
            {/* With right-aligned content */}
            <Navbar>
                <NavbarBrand>Logo</NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem><Button>Sign Up</Button></NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
};

export default NavbarPage;
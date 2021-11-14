import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Login-Register/Hooks/useAuth';

import './Nav.css';

const NavBar = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="nav-logo fw-bold text-dark" href="#home">Qutir<span className="nav-color">Mahal</span> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-start">
                        <Nav.Link className="link-title" as={Link} to='/home'>HOME</Nav.Link>
                        <Nav.Link className="link-title" as={Link} to='/products'>PRODUCTS</Nav.Link>



                        {
                            user.email && <Nav.Link className="link-title" as={Link} to='/dashboard'>DASHBOARD</Nav.Link>

                        }

                        <Nav.Link className="link-title" as={Link} to='/reveiws'>REVEIWS</Nav.Link>
                        {
                            user?.email ?
                                <Button onClick={logOut} className="px-3 rounded-1 py-0 mx-2" variant="dark">Log Out </Button> :
                                <Nav.Link className="link-title" as={Link} to='/login'>LOGIN</Nav.Link>

                        }
                        <Navbar.Text className="nav-color">
                            <a className="nav-color ms-2" href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useAuth from '../../../../hooks/useAuth';
import './Nav.css';

const NavBar = () => {
    // const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="nav-logo fw-bold text-dark" href="#home">Qutir<span className="nav-color">Mahal</span> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-start">
                        <Nav.Link className="link-title" as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link className="link-title" as={Link} to='/products'>Products</Nav.Link>
                        <Nav.Link className="link-title" as={Link} to='/reveiws'>Reveiws</Nav.Link>

                        {/* {
                            user.email ? <Nav.Link className="link-title" as={Link} to='/orders'>My Orders</Nav.Link> :
                                " "
                        }


                        {
                            user?.email ?
                                <Button onClick={logOut} className="px-2 py-0 mx-2" variant="danger">Log Out </Button> :
                                <Nav.Link className="link-title" as={Link} to='/login'>Login</Nav.Link>

                        } */}
                        <Navbar.Text className="text-dark">
                            <i class="fas fa-user-alt"></i> <a className="text-black ms-2" href="#login">Mark Don</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
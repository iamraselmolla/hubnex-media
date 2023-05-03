import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar className='bg-transparent fixed-top' expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src="logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <Link to="/" className='text-decoration-none px-3  text-white' href="#home">Page 1</Link>
                            <Link to="/page2" className='text-decoration-none px-3  text-white' href="#link">Page 2</Link>
                            <Link to="" className='text-decoration-none px-3  text-white' href="#link">Page 3</Link>
                            <Link to="" className='text-decoration-none px-3  text-white' href="#link">Page 4</Link>
                            <Link to="" className='text-decoration-none px-3  text-white' href="#link">Page 5</Link>
                            <Link to="" className='text-decoration-none px-3  text-white' href="#link"> <AiOutlineSearch></AiOutlineSearch> </Link>
                            <Link to="" className='text-decoration-none px-3 border roun p-1 rounded-5  text-white' href="#link"> Startup Program </Link>
                           
                          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
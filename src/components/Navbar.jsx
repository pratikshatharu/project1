import React from "react"
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Home, Search, AccountCircle } from '@material-ui/icons';
import './navbar.css';

function Topbar() {
    return (

        <>
            <Navbar fixed="top" bg="dark" expand="lg">
                <Navbar.Brand href="#" className="text-white">Healthy<span varient="danger">Food</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="text-white"><Home />HOME</Nav.Link>
                        <Nav.Link href="#action2" className="text-white">ABOUT US</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="type to search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success"><Search /></Button>
                    </Form>
                    <Nav >
                        <NavDropdown title="Log in" id="navbarScrollingDropdown" variant="light" className=" float-riight text-white">
                            <NavDropdown.Item href="#action/3.1"> <AccountCircle /> Log in</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Registers</NavDropdown.Item>
                        </NavDropdown>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Topbar;
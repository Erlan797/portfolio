import React, { Component } from 'react'
import { Container, FormControl, Navbar, NavLink, Nav, Form, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './my_image.jpeg'
import Home from '../Pages/Home.js'
import About from '../Pages/About.js'
import Contacs from '../Pages/Contacs.js'
import Blog from '../Pages/Blog'
import './Header.css'
export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='60'
                                weight='60'
                                className='d-inline-block align-top'
                                alt='Logo'

                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/about">About me</NavLink>
                                <NavLink href="/contacs">Contacs</NavLink>
                                <NavLink href="/blog">Blog</NavLink>
                            </Nav>
                            <Form inline = 'true'>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                            </Form>
                            <Button variant='outline-info'>Search</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/about" element={<About />} />
                            <Route exact path="/contacs" element={<Contacs />} />
                            <Route exact path="/blog" element={<Blog />} />
                        </Routes>
                </Router>
            </>
        )
    }
}

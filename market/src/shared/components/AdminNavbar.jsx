import React from 'react'
import { Nav, Navbar,Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const AdminNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Link to='/' className='ms-1'>Productos</Link>
                        <Link to='/category' className='ms-1'>Categorias</Link>
                        <Link to='/subcategory' className='ms-1'>Subcategorias</Link>
                    </Nav>
                    <Button variant='primary'>CERRAR SESIÓN</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AdminNavbar

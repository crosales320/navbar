import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#galeria">Galeria</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <img src='https://www.ubolosoft.com/Carrito/images/carrito.png' width={30} height={30}/>
                </Container>
            </Navbar>
            <br />
        </>
    );
}


export default NavBar;
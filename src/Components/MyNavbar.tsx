import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const MyNavbar = ()=>{

return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                <Link className="nav-link" to={"/"}>Home</Link>
                
            </Nav>
        </Container>
    </Navbar>

)

}

export default MyNavbar

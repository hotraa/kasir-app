import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "../index.css";

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
            <Container fluid className="d-flex justify-content-center">
                <Navbar.Brand href="#" className="navbar d-flex align-items-center gap-2">
                    <Image src="../public/logo-kasir.png" alt="Logo" width="30" height="30" roundedCircle />
                    <span>Kasir POS</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form,Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Basket2 } from "react-bootstrap-icons";
import { useState } from "react";

function NavbarMenu() {
    const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <Navbar className="nav rounded" variant="light" expand="lg">
        <Container fluid>
          
          <Button >
            <Basket2 className="icon" />
          </Button>
          {/* Search Toggle */}
          <div className="me-auto ms-3">
            {showSearch ? (
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  autoFocus
                  aria-label="Search"
                />
                <Button
                  variant="outline-dark"
                  onClick={() => setShowSearch(false)}
                >
                  ✕
                </Button>
              </Form>
            ) : (
              <Button
                variant="outline-dark"
                onClick={() => setShowSearch(true)}
              >
                <Search />
              </Button>
            )}
          </div>

          <Navbar.Toggle aria-controls="offcanvasNavbar" className="order-2" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="lg-ms-auto">
            <Navbar.Brand href="#"> Bahar Beautiy</Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form,Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Basket2 } from "react-bootstrap-icons";
import { ChevronDown } from "react-bootstrap-icons"; 
import Dropdown from "react-bootstrap/Dropdown";
import Logov from "../assets/Logo/Logo-vertical.png";
import Logos from "../assets/Logo/Logo-small.png";
import { useState } from "react";
import { Link } from "react-router-dom";


function NavbarMenu() {
    const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <Navbar className="nav rounded " sticky="top" variant="light" expand="lg">
        <Container fluid>
          <Button>
            <Basket2 />
          </Button>
          {/* Search Toggle */}
          <div className="me-auto ms-3">
            {showSearch ? (
              <Form className="d-flex">
                <div className="group">
                  <Search className="icon" />
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="input me-2"
                    autoFocus
                    aria-label="Search"
                  />
                </div>

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
            className="custom-offcanvas"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link className="menu-item" href="#home">
                  {" "}
                  پوستی
                </Nav.Link>
                <Nav.Link className="menu-item" href="#products">
                  آرایشی
                </Nav.Link>
                <div dir="rtl">
                  <Dropdown>
                    <Link to="/products">
                      <Dropdown.Toggle
                        className="dropdown-custom menu-item "
                        id="dropdown-basic"
                      >
                        محصولات
                        <ChevronDown className="dropdown-icon" />
                      </Dropdown.Toggle>
                    </Link>

                    <Dropdown.Menu>
                      <Dropdown.Item className="menu-item" href="#/action-1">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="menu-item" href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="menu-item" href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
             
                  <Nav.Link className="menu-item" >   <Link to="/"> خانه</Link></Nav.Link>
               
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="lg-ms-auto">
            <Navbar.Brand href="#" className="d-none d-lg-block">
              <img src={Logov} className="logo" alt="bahar-logo" />
            </Navbar.Brand>
            <Navbar.Brand href="#" className="d-lg-none">
              <img src={Logos} className="logos" alt="bahar-logo" />
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;

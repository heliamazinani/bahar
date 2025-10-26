import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Basket2 } from "react-bootstrap-icons";
import { ChevronDown } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import Logov from "../../assets/Logo/Logo-vertical.png";
import Logos from "../../assets/Logo/logo-small.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import "./Navbar.css";

function NavbarMenu() {
  const [showSearch, setShowSearch] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar className="nav rounded " sticky="top" variant="light" expand="lg">
        <Container fluid>
          <Button>
            <Basket2 size={18} onClick={() => setShowCart(true)} />
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
                <Search size={18} />
              </Button>
            )}
          </div>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="order-2"
            onClick={() => setShowOffcanvas(true)}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="custom-offcanvas"
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <button
                  to="/auth"
                  className="menu-item dropdown-custom"
                  onClick={() => setAuthOpen(true)}
                >
                  {" "}
                  ورود | عضویت
                </button>
                {authOpen && <AuthPage onClose={() => setAuthOpen(false)} />}
                <Nav.Link className="menu-item" href="#home">
                  {" "}
                  پوستی
                </Nav.Link>
                <Nav.Link className="menu-item" href="#products">
                  آرایشی
                </Nav.Link>
                <div dir="rtl">
                  <Dropdown
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    show={show}
                  >
                    <Link
                      to="/products"
                      onClick={() => setShowOffcanvas(false)}
                    >
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
                </div>{" "}
                <Link
                  to="/"
                  className="menu-item"
                  onClick={() => setShowOffcanvas(false)}
                >
                  {" "}
                  خانه
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Offcanvas
            show={showCart}
            onHide={() => setShowCart(false)}
            placement="start"
            className="cart-offcanvas"
            dir="rtl"
          >
            <Offcanvas.Header
              className="shopOffCanvesHead"
              dir="ltr"
              closeButton
            >
              <Offcanvas.Title>سبد خرید</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="shopOffCanvesBody">
              {/* Example cart content */}
              <div className="cart-item d-flex justify-content-between align-items-center mb-3">
                <div>
                  <strong>کرم آبرسان</strong>
                  <p className="mb-0 text-muted">تعداد: 1</p>
                </div>
                <span>۹۵,۰۰۰ تومان</span>
              </div>

            
              <div className="final">
                <hr />
                <div className="d-flex justify-content-between mt-3">
                  <strong>مجموع:</strong>
                  <span>۹۵,۰۰۰ تومان</span>
                </div>
                <hr />
                <Button
                  className="buy  mt-3 mb-4"
                  onClick={() => setShowCart(false)}
                >
                  ادامه خرید
                </Button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

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

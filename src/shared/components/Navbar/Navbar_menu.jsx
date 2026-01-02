import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import SelectedProduct from "../../../features/products/components/SelectedProduct/SelectedProduct.jsx";
import { Form, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Basket2 } from "react-bootstrap-icons";
import { ChevronDown, PlusLg, DashLg } from "react-bootstrap-icons";

import Dropdown from "react-bootstrap/Dropdown";
import Logov from "../../../assets/Logo/Logo-vertical.png";
import Logos from "../../../assets/Logo/logo-small.png";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import AuthPage from "../../../features/auth/pages/AuthPage.jsx";
import { products } from "../../../DummyData/Products.jsx";
import { useRef } from "react";
import "./Navbar.css";

function NavbarMenu() {
  const [showSearch, setShowSearch] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
 const timeoutId = useRef(null);
  const product = products[0];
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(timeoutId.current);
    setShowDrop(true);
  };

  const handleMouseLeave = () => {

     timeoutId.current= setTimeout(() => {
      setShowDrop(false);
    }, 300);
    

      
  };
  const openAuth = () => {
    navigate('/auth');

  };

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
                  onClick={openAuth}
                  className="menu-item dropdown-custom"
                >
                  ورود | عضویت
                </button>
                <Nav.Link className="menu-item drop" href="#home">
                  پوستی
                </Nav.Link>
                <Nav.Link className="menu-item drop" href="#products">
                  آرایشی
                </Nav.Link>
                <div
                  dir="rtl"
                  className="products-wrapper drop"
                  onMouseEnter={() => setShowDrop(true)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Trigger */}
                  <Link
                    to="/products"
                    className="dropdown-custom menu-item products-trigger"
                  >
                    محصولات{" "}
                    <ChevronDown
                      className={`dropdown-icon ${showDrop ? "open" : ""}`}
                    />
                  </Link>

                  {/* Mega Menu */}
                  {showDrop && (
                    <div className="mega-menu ">
                      <div className="catagories d-flex pe-2 ps-5">
                        <div className="nav-catagory">
                          <h6>آرایشی</h6>
                          <Link className="menu-item mega-item" to="#">
                            آرایش لب
                          </Link>
                          <Link className="menu-item" to="#">
                            آرایش چشم
                          </Link>
                          <Link className="menu-item" to="#">
                            آرایش صورت
                          </Link>
                        </div>

                        <div className="nav-catagory">
                          <h6>مراقبتی</h6>
                          <Link className="menu-item" to="#">
                            مراقبت لب
                          </Link>
                          <Link className="menu-item" to="#">
                            مراقبت چشم
                          </Link>
                          <Link className="menu-item" to="#">
                            مراقبت صورت
                          </Link>
                          <Link className="menu-item" to="#">
                            مراقبت بدن
                          </Link>
                          <Link className="menu-item" to="#">
                            مراقبت مو
                          </Link>
                        </div>
                        <div className="nav-catagory">
                          <h6>ابزار</h6>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* burgerdrop 1 */}
                <div dir="rtl">
                  <Dropdown className="burgerdrop" show={show}>
                    <div className="menu-item ">
                      <Link
                        to="/products"
                        onClick={() => setShowOffcanvas(false)}
                      >
                        مراقبتی
                      </Link>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className={`customChev ${show ? "open" : ""}`}
                        onClick={() => setShow(!show)}
                      >
                        <span className="chev-icon">
                          {show ? <PlusLg size={25} /> : <PlusLg size={25} />}
                        </span>
                      </Dropdown.Toggle>
                    </div>

                    <Dropdown.Menu className="dropdownMenu p-0 mt-0 mt-0">
                      <div className="subs  ">
                        <div className="sub">
                          <Dropdown.Item className="" href="#/action-1">
                            <h6> مراقبت لب</h6>
                          </Dropdown.Item>
                        </div>
                        <div className="sub">
                          <Dropdown.Item className="" href="#/action-1">
                            <h6> مراقبت چشم</h6>
                          </Dropdown.Item>
                        </div>
                        <div className="sub">
                          <Dropdown.Item className="" href="#/action-1">
                            <h6> مراقبت صورت</h6>
                          </Dropdown.Item>
                        </div>
                        <div className="sub">
                          <Dropdown.Item className="" href="#/action-1">
                            <h6> مراقبت بدن</h6>
                          </Dropdown.Item>
                        </div>
                        <div className="sub">
                          <Dropdown.Item className="" href="#/action-1">
                            <h6> مراقبت مو</h6>
                          </Dropdown.Item>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>{" "}
                <div dir="rtl">
                  <Dropdown className="burgerdrop" show={show1}>
                    <div className="menu-item ">
                      <Link
                        to="/products"
                        onClick={() => setShowOffcanvas(false)}
                      >
                        آرایشی
                      </Link>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className={`customChev ${show1 ? "open" : ""}`}
                        onClick={() => setShow1(!show1)}
                      >
                        <span className="chev-icon">
                          {show1 ? <PlusLg size={25} /> : <PlusLg size={25} />}
                        </span>
                      </Dropdown.Toggle>
                    </div>

                    <Dropdown.Menu className="dropdownMenu p-0 mt-0">
                      <div className="subs  ">
                        <div className="sub">
                          <Dropdown.Item className="" href="#/action-1">
                            <h6> آرایش لب</h6>
                          </Dropdown.Item>
                        </div>
                        <div className="sub">
                          <Dropdown.Item className="" href="#/action-1">
                            <h6> آرایش چشم</h6>
                          </Dropdown.Item>
                        </div>
                        <div className="sub">
                          <Dropdown.Item className="" href="#/action-1">
                            <h6> آرایش صورت</h6>
                          </Dropdown.Item>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>{" "}
                <Link
                  to="/products"
                  className="menu-item d-lg-none"
                  onClick={() => setShowOffcanvas(false)}
                >
                  محصولات
                </Link>
                <Link
                  to="/"
                  className="menu-item"
                  onClick={() => setShowOffcanvas(false)}
                >
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
              <SelectedProduct product={product}></SelectedProduct>

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

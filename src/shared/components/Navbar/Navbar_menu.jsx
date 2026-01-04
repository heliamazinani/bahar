import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import SelectedProduct from "../../../features/products/components/SelectedProduct/SelectedProduct.jsx";
import { Form, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Basket2 } from "react-bootstrap-icons";
import { ChevronDown, PlusLg, BoxArrowLeft } from "react-bootstrap-icons";
import Logov from "../../../assets/Logo/Logo-vertical.png";
import Logos from "../../../assets/Logo/logo-small.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../../../DummyData/Products.jsx";
import { useRef, useEffect } from "react";
import { useAuth } from "../../../features/auth/context/AuthContext";
import { useCart } from "../../../features/orders/context/CartContext.jsx";
import "./Navbar.css";

function NavbarMenu() {
  const [showSearch, setShowSearch] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [open, setOpen] = useState(false); //offcanves's dropdown1
  const [open1, setOpen1] = useState(false); //offcanves's dropdown2
  const timeoutId = useRef(null);
  const product = products[0];
  const { items, removeItem, changeQty } = useCart();

  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const profileRef = useRef(null);

  const toFarsiNumber = (number) => {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .split("")
      .map((char) => {
        if (char >= "0" && char <= "9") {
          return farsiDigits[parseInt(char)];
        }
        return char;
      })
      .join("");
  };
  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate("/auth", {
        state: { from: "/checkout" },
        replace: true,
      });
    } else {
      navigate("/checkout");
    }
  };
  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setShowDrop(false);
    }, 300);
  };
  const handleLogout = () => {
    setShowProfile(false);
    logout();
    navigate("/");
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const subtotal = items.reduce((sum, item) => {
    const price = item.price * item.quantity;
    return sum + price;
  }, 0);

  const totalDiscount = items.reduce((sum, item) => {
    if (item.onSale && item.newPrice) {
      return sum + (item.price - item.newPrice) * item.quantity;
    }
    return sum;
  }, 0);

  const finalTotal = subtotal - totalDiscount;

  return (
    <>
      <Navbar className="nav rounded " sticky="top" variant="light" expand="lg">
        <Container fluid>
          <Button className="cart-btn" id="cart-icon">
            <Basket2
              size={18}
              onClick={() => {
                setShowCart(true);
              }}
            />{" "}
            {items.length > 0 && <span className="badge">{items.length} </span>}
          </Button>
          {/* Search Toggle */}
          <div className="me-auto ">
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
          {!isAuthenticated ? (
            <Button
              onClick={() => navigate("/auth")}
              className="menu-item dropdown-custom"
            >
              ورود | ثبت‌نام
            </Button>
          ) : (
            <div dir="rtl" className="products-wrapper" ref={profileRef}>
              <Button
                className="dropdown-custom profile-drop"
                onClick={() => setShowProfile((prev) => !prev)}
              >
                پروفایل{"  "}
                <ChevronDown
                  className={`dropdown-icon ${showProfile ? "open" : ""}`}
                />
              </Button>

              {showProfile && (
                <div className="profile-menu">
                  <div className="catagories d-flex ">
                    <div className="nav-catagory">
                      <Link to="#" className="menu-item">
                        اطلاعات
                      </Link>
                      <hr style={{ margin: 0, color: "gray" }} />
                      <Link to="#" className="menu-item">
                        سفارش ها
                      </Link>
                      <hr style={{ margin: 0, color: "gray" }} />
                      <Button
                        className="menu-item logout"
                        onClick={handleLogout}
                      >
                        خروج <BoxArrowLeft size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

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
                  <Link
                    to="/products"
                    className="dropdown-custom menu-item products-trigger"
                  >
                    محصولات{" "}
                    <ChevronDown
                      className={`dropdown-icon ${showDrop ? "open" : ""}`}
                    />
                  </Link>

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
                  <div className="burgerdrop">
                    <div
                      className="menu-item burger-header"
                      onClick={() => setOpen((prev) => !prev)}
                    >
                      <Link
                        to="/products"
                        onClick={() => setShowOffcanvas(false)}
                        className="burger-title"
                      >
                        مراقبتی
                      </Link>

                      <div className={`customChev ${open ? "open" : ""}`}>
                        <span className="chev-icon">
                          {open ? <PlusLg size={25} /> : <PlusLg size={25} />}
                        </span>
                      </div>
                    </div>
                    {open && (
                      <div className="subs">
                        <Link to="#" className="sub">
                          مراقبت لب
                        </Link>
                        <Link to="#" className="sub">
                          مراقبت چشم
                        </Link>
                        <Link to="#" className="sub">
                          مراقبت صورت
                        </Link>
                        <Link to="#" className="sub">
                          مراقبت بدن
                        </Link>
                        <Link to="#" className="sub">
                          مراقبت مو
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div dir="rtl">
                  <div className="burgerdrop">
                    <div
                      className="menu-item burger-header"
                      onClick={() => setOpen1((prev) => !prev)}
                    >
                      <Link
                        to="/products"
                        onClick={() => setShowOffcanvas(false)}
                        className="burger-title"
                      >
                        آرایشی
                      </Link>

                      <div className={`customChev ${open1 ? "open" : ""}`}>
                        <span className="chev-icon">
                          {open1 ? <PlusLg size={25} /> : <PlusLg size={25} />}
                        </span>
                      </div>
                    </div>
                    {open1 && (
                      <div className="subs">
                        <Link to="#" className="sub">
                          آرایش لب
                        </Link>
                        <Link to="#" className="sub">
                          آرایش چشم
                        </Link>
                        <Link to="#" className="sub">
                          آرایش صورت
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

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
              <div className="cart-items">
                {items.length === 0 ? (
                  <p className="text-center mt-4">سبد خرید خالی است</p>
                ) : (
                  items.map((item) => (
                    <SelectedProduct
                      key={item.id}
                      product={item}
                      onRemove={() => removeItem(item.id)}
                      onIncrease={() => changeQty(item.id, item.quantity + 1)}
                      onDecrease={() => changeQty(item.id, item.quantity - 1)}
                    />
                  ))
                )}
              </div>

              <div className="cart-summary">
                <div className="d-flex justify-content-between">
                  <span>جمع کل بدون تخفیف</span>
                  <span>{toFarsiNumber(subtotal.toLocaleString())} تومان</span>
                </div>

                {totalDiscount > 0 && (
                  <div className="d-flex justify-content-between text-success">
                    <span>تخفیف</span>
                    <span>
                      {toFarsiNumber(totalDiscount.toLocaleString())} تومان
                    </span>
                  </div>
                )}

                <hr />

                <div className="d-flex justify-content-between fw-bold">
                  <span>مبلغ قابل پرداخت</span>
                  <span>
                    {toFarsiNumber(finalTotal.toLocaleString())} تومان
                  </span>
                </div>

                <Button
                  className="buy w-100 mt-3"
                  disabled={items.length === 0}
                  onClick={handleCheckout}
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

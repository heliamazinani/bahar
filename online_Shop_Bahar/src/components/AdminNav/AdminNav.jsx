import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ChevronDown } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminNav.css"


function AdminNav() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  // const [showDrop, setShowDrop] = useState(false);
  // let timeoutId = null;
  // const handleMouseEnter = () => {
  //   clearTimeout(timeoutId);
  //   setShowDrop(true);
  // };
  // const handleMouseLeave = () => {
  //   timeoutId = setTimeout(() => {
  //     setShowDrop(false);
  //   }, 300);
  // };

  return (
    <>
      <div className="admin-nav">
        <Navbar
          className="nav rounded "
          sticky="top"
          variant="light"
          expand="lg"
        >
          <Container fluid className="fluid-container">
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
                  <Nav.Link className="menu-item" href="#home">
                    پوستی
                  </Nav.Link>
                  <Nav.Link className="menu-item" href="#products">
                    آرایشی
                  </Nav.Link>
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

            <Navbar.Brand >
              <h3> مدیریت فروشگاه</h3>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default AdminNav;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Instagram, Facebook, Twitter } from "react-bootstrap-icons";
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer mt-5 pt-0 pb-2" dir="rtl">
      <div className="title-container">
        <div className="title">
          <p>تماس با ما:</p>
        </div>
      </div>
      <Container className="pt-5">
        <Row className="text-center text-lg-end">
          <Col lg={6} md={6} sm={12} className="mb-4">
            <h5 className="footer-title">درباره ما</h5>
            <p className="footer-text">
              بهار فروشگاه آنلاین محصولات آرایشی و پوستی با بهترین کیفیت و قیمت
              مناسب است.
            </p>
          </Col>

          {/* <Col lg={4} md={6} sm={12} className="text-center text-lg-end mb-4">
            <h5 className="footer-title">لینک‌های مفید</h5>
            <ul className="footer-links list-unstyled">
              <li>
                <a href="#home">خانه</a>
              </li>
              <li>
                <a href="#products">محصولات</a>
              </li>
              <li>
                <a href="#about">درباره ما</a>
              </li>
              <li>
                <a href="#contact">تماس با ما</a>
              </li>
            </ul>
          </Col> */}

          <Col lg={6} md={12} sm={12} className="text-center text-lg-start">
            <h5 className="footer-title">ما را دنبال کنید</h5>
            <div className="social-icons">
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Twitter />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col className="text-center">
            <p className="copyright">
              © {new Date().getFullYear()} بهار | تمامی حقوق محفوظ است.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="footer-background-wave">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerWaveGradient">
              <stop offset="0%" stopColor="#ffd8ed">
                <animate
                  attributeName="stop-color"
                  values="#ffd8ed; #f7a7e1; #ffdef6; #ffd8ed"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#f7a7e1">
                <animate
                  attributeName="stop-color"
                  values="#f7a7e1; #ffdef6; #ffd8ed; #f7a7e1"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#footerWaveGradient)"
            fillOpacity="1"
            d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
}
export default Footer;

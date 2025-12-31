import SelectedProduct from "../../SelectedProduct/SelectedProduct";
import { products } from "../../../DummyData/Products";
import { Container, Col, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CartStep.css";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
const toFarsiNumber = (number) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .split("")
    .map((char) =>
      char >= "0" && char <= "9" ? farsiDigits[parseInt(char)] : char
    )
    .join("");
};
function CartStep() {
  const product = products[0];
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Container dir="rtl" className="d-lg-block d-none  p-2 pe-3">
        {" "}
        <Row className="align-items-center">
          <Col className="text-muted" lg={6} md={12}>
            محصول
          </Col>
          <Col className="text-muted" lg={4} md={6}>
            جمع قیمت
          </Col>
          <Col className="text-muted" lg={2} md={6}>
            تعداد
          </Col>
        </Row>
      </Container>
      <SelectedProduct product={product} />
      <SelectedProduct product={products[1]} />
      <SelectedProduct product={products[6]} />
      <Container>
        <Row>
          <Col lg={4}>
            <div className="total-price-section" dir="rtl">
              <div className="subPrice text-muted">
                <p className=""> قیمت کالا‌ها :</p>
                <span className="">
                  {toFarsiNumber(product.price.toLocaleString())} تومان
                </span>
              </div>

              <div className="subPrice text-red">
                <p className=""> سود شما از این خرید:</p>
                <span className="">
                  {toFarsiNumber(product.price.toLocaleString())} تومان
                </span>
              </div>

              <div className="subPrice text-muted">
                <p className=""> جمع سبد خرید:</p>
                <span className="">
                  {toFarsiNumber(product.price.toLocaleString())} تومان
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between">
              <Button
                className="navigationNext"
                onClick={() => navigate("/checkout/info")}
              >
                <ChevronLeft /> ثبت سفارش
              </Button>
              <Button className="navigationPrev" onClick={() => navigate("/")}>
                بازگشت
                {" "}
                <ChevronRight />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartStep;

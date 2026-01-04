import SelectedProduct from "../../../../products/components/SelectedProduct/SelectedProduct";
import { Container, Col, Row, Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import "./CartStep.css";

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
  const navigate = useNavigate();
  const { items, changeQty, removeItem } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalDiscount = items.reduce((sum, item) => {
    if (item.onSale && item.newPrice) {
      return sum + (item.price - item.newPrice) * item.quantity;
    }
    return sum;
  }, 0);

  const finalTotal = subtotal - totalDiscount;

  return (
    <>
      <Container dir="rtl" className="d-lg-block d-none p-2 pe-3">
        <Row className="align-items-center">
          <Col lg={6}>محصول</Col>
          <Col lg={4}>جمع قیمت</Col>
          <Col lg={2}>تعداد</Col>
        </Row>
      </Container>

      {items.map((item) => (
        <SelectedProduct
          key={item.id}
          product={item}
          onIncrease={() => changeQty(item.id, item.quantity + 1)}
          onDecrease={() => changeQty(item.id, item.quantity - 1)}
          onRemove={() => removeItem(item.id)}
        />
      ))}

      <Container>
        <Row>
          <Col lg={6} dir="rtl">
            {/* <div className="total-price-section" dir="rtl"> */}
            <div className="subPrice text-muted">
              <p>قیمت کالا‌ها:</p>
              <span>{toFarsiNumber(subtotal.toLocaleString())} تومان</span>
            </div>
            <hr className="p-0 mt-0" />
            {totalDiscount > 0 && (
              <div className="subPrice text-success">
                <p>سود شما از این خرید:</p>
                <span>
                 {toFarsiNumber(totalDiscount.toLocaleString())} تومان
                </span>
              </div>
            )}
            <hr className="p-0 mt-0" />
            <div className="subPrice fw-bold">
              <p>جمع سبد خرید:</p>
              <span>{toFarsiNumber(finalTotal.toLocaleString())} تومان</span>
            </div>
       
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default CartStep;

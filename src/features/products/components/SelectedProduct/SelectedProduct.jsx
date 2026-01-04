import { Container, Col, Row } from "react-bootstrap";
import { DashLg, Trash, PlusLg } from "react-bootstrap-icons";
import "./Selected.css";

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

function SelectedProduct({ product, onIncrease, onDecrease, onRemove }) {
  const count = product.quantity;
  const price = product.newPrice || product.price || 0;

  if (!count) return null;

  const total = price * count;
  const formattedTotal = total.toLocaleString();
  const discount =
    product.onSale && product.newPrice
      ? (product.price - product.newPrice) * count
      : 0;

  return (
    <Container dir="rtl" className="selectedProduct mb-3">
      <Row className="align-items-center">
        <Col lg={6} md={12}>
          <div className="d-flex align-items-center">
            <div className="image-wrapper0">
              <img
                src={product.image}
                className="productImage0"
                alt={product.name}
              />
            </div>
            <h6 className="productName mb-0 me-4">{product.name}</h6>
          </div>
          <hr className="d-lg-none" />
        </Col>

        <Col lg={4} md={6} className="pe-1">
          <div className="total-price mt-3 mt-lg-0">
            <p className="d-lg-none">جمع قیمت:</p>

            <div className="price-section">
              {discount > 0 && (
                <span className="discount text-success">
                  {toFarsiNumber(discount.toLocaleString())} تومان تخفیف
                </span>
              )}
              <span className="tprice">
                {toFarsiNumber(formattedTotal)} تومان
              </span>
            </div>
          </div>
        </Col>

        <Col lg={2} md={6} className="pe-1">
          <div className="total-price mt-3 mt-lg-0">
            <p className="d-lg-none">تعداد:</p>

            <div className="productCount m-lg-auto">
              <PlusLg className="count-icon" onClick={onIncrease} />
              <p>{toFarsiNumber(count)}</p>
              {count === 1 ? (
                <Trash className="count-icon" onClick={onRemove} />
              ) : (
                <DashLg className="count-icon" onClick={onDecrease} />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SelectedProduct;

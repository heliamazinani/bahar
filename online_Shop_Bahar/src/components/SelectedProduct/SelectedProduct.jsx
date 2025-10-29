import { Container, Col, Row } from "react-bootstrap";
import { DashLg, Trash } from "react-bootstrap-icons";
import { PlusLg } from "react-bootstrap-icons";
import "./Selected.css";
import { useState } from "react";

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

function SelectedProduct({ product }) {
  const [count, setCount] = useState(1);
  if (!count) {
    return <></>;
  }
  return (
    <>
      <Container dir="rtl" className="selectedProduct mt-5">
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <div className="d-flex align-items-center ">
              <img src={product.image} className="productImage" alt="" />
              <h6 className="mb-0 me-4">{product.name}</h6>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="price-section">
              {product.onSale && (
                <span className="old-price">
                  {toFarsiNumber(product.price.toLocaleString())}
                </span>
              )}
              <span className="price">
                {toFarsiNumber(
                  (product.newPrice || product.price).toLocaleString()
                )}{" "}
                تومان
              </span>
            </div>
          </Col>
          <Col lg={2} md={6}>
            <div className="productCount">
              <PlusLg
                onClick={() => {
                  setCount(count + 1);
                }}
              />
              {count}
              {count == 1 ? (
                <Trash
                  onClick={() => {
                    setCount(count - 1);
                  }}
                />
              ) : (
                <DashLg
                  onClick={() => {
                    setCount(count - 1);
                  }}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SelectedProduct;

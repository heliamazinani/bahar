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
            <hr className="d-lg-none" />
          </Col>
          <Col lg={4} md={6}>
            <div className="total-price mt-md-3 mt-sm-3 mt-3 mt-lg-0">
              <p className=" d-lg-none">جمع قیمت:</p>
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
            </div>
          </Col>
          <Col lg={2} md={6}>
            <div className="total-price mt-md-3 mt-sm-3 mt-3 mt-lg-0">
              <p className=" d-lg-none">تعداد:</p>
              <div className="productCount">
                <PlusLg
                  className="count-icon"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                />
                <p>{count}</p>

                {count == 1 ? (
                  <Trash
                    className="count-icon"
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  />
                ) : (
                  <DashLg
                    className="count-icon"
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  />
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SelectedProduct;

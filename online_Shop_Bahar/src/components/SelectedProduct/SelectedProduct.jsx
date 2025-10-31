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
  const price = product.newPrice || product.price || 0; 
  const total = Number(price) * Number(count); 
  const formattedTotal = total.toLocaleString();
  const discount =( product.price - product.newPrice) * Number(count);

  if (!count) {
    return <></>;
  }
  return (
    <>
      <Container dir="rtl" className="selectedProduct mb-3 ">
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <div className="d-flex align-items-center ">
              <div className="image-wrapper0">
                <img src={product.image} className="productImage0" alt="" />
              </div>
              <h6 className="productName mb-0 me-4">{product.name}</h6>
            </div>
            <hr className="d-lg-none" />
          </Col>
          <Col lg={4} md={6}>
            <div className="total-price mt-md-3 mt-sm-3 mt-3 mt-lg-0">
              <p className=" d-lg-none">جمع قیمت:</p>
              <div className="price-section">
                {product.onSale && (
                  <span className="discount">
                    {toFarsiNumber(discount.toLocaleString())} تومان تخفیف
                  </span>
                )}
                <span className="tprice">
                  {toFarsiNumber(formattedTotal)} تومان
                </span>
              </div>
            </div>
          </Col>
          <Col className="count" lg={2} md={6}>
            <div className="total-price mt-md-3 mt-sm-3 mt-3 mt-lg-0">
              <p className=" d-lg-none">تعداد:</p>
              <div className="productCount m-lg-auto ">
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

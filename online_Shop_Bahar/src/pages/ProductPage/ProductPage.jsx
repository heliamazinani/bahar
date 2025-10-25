import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { products } from "../../DummyData/Products";
import { Basket2 } from "react-bootstrap-icons";
import ProductGallery from "../../components/ProductGallery/ProductGallery"
import "./ProductPage.css"
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
function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="text-center py-5">
        <h3>محصول یافت نشد</h3>
        <Link to="/">بازگشت به صفحه اصلی</Link>
      </Container>
    );
  }

  return (
    <Container className="py-5 product-page" dir="rtl">
      <Row className="align-items-center">
        <Col md={6}>
          <ProductGallery images={product.images}></ProductGallery>
          {/* <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
          /> */}
        </Col>
        <Col md={6}>
          <h1 className="mt-5 mb-3">{product.name}</h1>
          <div className="catagory">
            <p>{product.category}</p>
          </div>

          <div className="prices m-3">
            <span className="new m-1">
              {toFarsiNumber(
                (product.newPrice || product.price).toLocaleString()
              )}
            </span>

            {product.onSale && (
              <span className=" old text-muted">
                {toFarsiNumber(product.price.toLocaleString())}
              </span>
            )}
            <span className="new">تومان </span>
          </div>
          <div
            className="description mb-4"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <Button className="buy me-2">
            <Basket2 className="me-2" />
            افزودن به سبد خرید
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;

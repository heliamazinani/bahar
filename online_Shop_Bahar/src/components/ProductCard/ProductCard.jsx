import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Basket2 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./ProductCard.css"

const toFarsiNumber = (number) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .split("")
    .map((char) => {
      if (char >= "0" && char <= "9") {
        return farsiDigits[parseInt(char)];
      }
      return char; // keep commas or other symbols
    })
    .join("");
};

function ProductCard({ product }) {
  return (
    <Card className="product-card">
      <Card.Img className="product-img" variant="top" src={product.image} />
      {product.onSale && (
        <div className="text-container">
          <p>تخفیف</p>
        </div>
      )}

      <div dir="rtl">
        <Card.Body>
          <Card.Title className="card-title">{product.name}</Card.Title>
          <div className="card-text">
            <div>
              <Container>
                <Row>
                  {product.onSale && (
                    <Col xxl={5}>
                      <div className="ha">
                        <span className="old-price">
                          {toFarsiNumber(product.price.toLocaleString())}
                        </span>
                      </div>
                    </Col>
                  )}
                  <Col className="price-container">
                    <span className="price">
                      {toFarsiNumber(
                        (product.newPrice || product.price).toLocaleString()
                      )}
                    </span>
                    <span> تومان </span>
                  </Col>
                </Row>
                <div className="overlay"></div>
              </Container>
              <div className="hover-buttons">
                <Button className="buy" variant="outline-dark" size="sm">
                  <Link to={`/product/${product.id}`}>مشاهده و خرید</Link>
                </Button>
                <Button className="basket">
                  <Basket2 size={50} />
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}
export default ProductCard;

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Basket2 } from "react-bootstrap-icons";
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
          <Card.Text className="card-text">
            <div>
              <Container>
                <Row>
                  {product.onSale && (
                    <Col xxl={5}>
                      <div className="ha">
                        <span className="old-price">
                          {product.price.toLocaleString()}
                        </span>
                      </div>
                    </Col>
                  )}
                  <Col>
                    <span>
                      {" "}
                      {(product.newPrice || product.price).toLocaleString()}
                    </span>
                    <span>تومان</span>
                  </Col>
                </Row>
                <div className="overlay"></div>
              </Container>
              <div className="hover-buttons">
                <Button className="buy" variant="outline-dark" size="sm">
                  مشاهده و خرید
                </Button>
                <Button className="basket">
                  <Basket2 size={50} />
                </Button>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}
export default ProductCard;

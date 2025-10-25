import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Basket2 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./ProductCard.css";

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

function ProductCard({ product }) {
  return (
    <Card className="product-card">
      <div className="image-wrapper">
        <Card.Img
          className="product-img"
          variant="top"
          src={product.image}
          alt={product.name}
        />
        {product.onSale && (
          <div className="text-container">
            <p>تخفیف</p>
          </div>
        )}
        <div className="overlay"></div>
      </div>

      <Card.Body dir="rtl" className="card-body">
        <Card.Title className="card-title">{product.name}</Card.Title>

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

        <div className="hover-buttons">
          <Button className="buy">
            <Link to={`/product/${product.id}`}>مشاهده و خرید</Link>
          </Button>
          <Button className="basket">
            <Basket2 size={40} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

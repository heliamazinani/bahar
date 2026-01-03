import Card from "react-bootstrap/Card";
import { useCart } from "../../../orders/context/CartContext";
import { Button } from "react-bootstrap";
import { Basket2 } from "react-bootstrap-icons";
import { useRef } from "react";
import { flyToCart } from "../../utils/flyToCart";
import { Link, useNavigate } from "react-router-dom";
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
  const imgRef = useRef(null);

    const navigate = useNavigate();
    const { addItem } = useCart();
      const handleCardClick = () => {
        navigate(`/product/${product.id}`);
      };
      const handleCart = (event) => {
        event.stopPropagation();
         flyToCart(imgRef.current);
        addItem(product);
      };
  return (
    <Card className="product-card" onClick={handleCardClick}>
      <div className="image-wrapper">
        <Card.Img
          ref={imgRef}
          className="product-img"
          variant="top"
          src={product.image}
          alt={product.name}
        />
        <div className="image-overlay" />
        <div className="hover-buttons">
          <Button className="buy">
            <Link to={`/product/${product.id}`}>مشاهده </Link>
          </Button>
          <Button className="basket" onClick={handleCart}>
            <Basket2 size={40} />
          </Button>
        </div>
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

        <Button className="mobile-cart-btn d-md-none" onClick={handleCart}>
          <Basket2 size={22} />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

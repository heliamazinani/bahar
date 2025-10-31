import SelectedProduct from "../../SelectedProduct/SelectedProduct";
import { products } from "../../../DummyData/Products";
import { Container, Col, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function CartStep() {
  const product = products[0];
    const navigate = useNavigate();
  return (
    <>
      {" "}
      <Container dir="rtl" className="d-lg-block d-none mt-5 p-2 pe-3">
        {" "}
        <Row className="align-items-center">
          <Col className="text-muted" lg={6} md={12}>
            محصول
          </Col>
          <Col className="text-muted" lg={4} md={6}>
            جمع قیمت
          </Col>
          <Col className="text-muted" lg={2} md={6}>
            تعداد
          </Col>
        </Row>
      </Container>
      <SelectedProduct product={product} />
      <SelectedProduct product={products[1]} />
      <SelectedProduct product={products[6]} />
      <Button onClick={() => navigate("/checkout/info")}>ادامه</Button>
    </>
  );
}

export default CartStep;

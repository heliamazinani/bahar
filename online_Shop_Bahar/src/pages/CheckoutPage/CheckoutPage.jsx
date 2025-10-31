import SelectedProduct from "../../components/SelectedProduct/SelectedProduct";
import { products } from "../../DummyData/Products";
import { Container, Col, Row } from "react-bootstrap";
function CheckoutPage(){
    const product = products[0];
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
      </>
    );
    
}

export default CheckoutPage;
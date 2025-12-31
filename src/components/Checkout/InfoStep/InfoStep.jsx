import React, { useState } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
export default function InfoStep() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="checkout-step p-3">
      <h4 className="mb-4">📦 اطلاعات ارسال</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>نام و نام خانوادگی</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>شماره تماس</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>آدرس</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between">
              <Button
                className="navigationNext"
                onClick={() => navigate("/checkout/payment")}
              >
                <ChevronLeft />
                پرداخت
              </Button>
              <Button
                className="navigationPrev"
                onClick={() => navigate("/checkout/")}
              >
                بررسی سبد خرید <ChevronRight />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

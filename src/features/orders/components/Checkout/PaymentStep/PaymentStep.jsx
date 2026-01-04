import React from "react";
import { Container,Col,Row,Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
export default function PaymentStep() {
      const navigate = useNavigate();
  return (
    <div className="checkout-step p-3">
      <h4 className="mb-4">💳 روش پرداخت</h4>

      <Form>
        <Form.Check
          type="radio"
          name="payment"
          id="online"
          label="پرداخت آنلاین"
          defaultChecked
        />
        <Form.Check
          type="radio"
          name="payment"
          id="cod"
          label="پرداخت در محل"
        />
      </Form>


    </div>
  );
}

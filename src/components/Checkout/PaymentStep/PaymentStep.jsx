import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
      <Button onClick={() => navigate("/checkout/confirmation")}>پرداخت</Button>
      <Button onClick={() => navigate("/checkout/info")}>بازگشت</Button>
    </div>
  );
}

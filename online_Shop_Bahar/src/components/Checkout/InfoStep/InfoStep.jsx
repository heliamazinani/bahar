import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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

      <Button onClick={() => navigate("/checkout/payment")}>
        ادامه به پرداخت
      </Button>
            <Button onClick={() => navigate("/checkout/")}>بازگشت</Button>
    </div>
  );
}

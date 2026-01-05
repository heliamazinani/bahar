import React from "react";
import { Button } from "react-bootstrap";
import { CheckCircle } from "react-bootstrap-icons";

export default function ConfirmationStep() {
  return (
    <div className="checkout-step p-3 text-center">
      <CheckCircle size={60} color="green" className="mb-3" />
      <h4>سفارش شما با موفقیت ثبت شد </h4>
      <p>از خرید شما سپاسگزاریم.</p>
      <Button href="/">بازگشت به خانه</Button>
    </div>
  );
}

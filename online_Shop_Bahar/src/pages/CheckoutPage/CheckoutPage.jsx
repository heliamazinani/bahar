import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNext = () => {
    if (location.pathname.endsWith("/checkout")) navigate("/checkout/info");
    else if (location.pathname.endsWith("/info")) navigate("/checkout/payment");
    else if (location.pathname.endsWith("/payment"))
      navigate("/checkout/confirmation");
  };

  const handlePrev = () => {
    if (location.pathname.endsWith("/info")) navigate("/checkout");
    else if (location.pathname.endsWith("/payment")) navigate("/checkout/info");
  };

  return (
    <div className="p-5 text-center">
      <h4>Checkout Page</h4>
      <p>Current step: {location.pathname}</p>

      <div className="d-flex justify-content-between mt-4">
        {!location.pathname.endsWith("/checkout") && (
          <Button variant="secondary" onClick={handlePrev}>
            بازگشت
          </Button>
        )}
        {!location.pathname.endsWith("/confirmation") && (
          <Button onClick={handleNext}>ادامه</Button>
        )}
      </div>
    </div>
  );
}

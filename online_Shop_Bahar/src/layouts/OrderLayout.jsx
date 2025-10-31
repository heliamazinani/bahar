import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  CartCheck,
  UiChecks,
  CreditCard,
  Check2Circle,
} from "react-bootstrap-icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function OrderLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const stepMap = [
    { path: "/checkout", label: "سبد خرید", icon: <CartCheck size={25} /> },
    {
      path: "/checkout/info",
      label: "اطلاعات ارسال",
      icon: <UiChecks size={25} />,
    },
    {
      path: "/checkout/payment",
      label: "پرداخت",
      icon: <CreditCard size={25} />,
    },
    {
      path: "/checkout/confirmation",
      label: "تایید نهایی",
      icon: <Check2Circle size={25} />,
    },
  ];

  const currentStep = stepMap.findIndex((s) => location.pathname === s.path);

  return (
    <>
      <Container dir="rtl">
        <Row className="align-items-center p-5 m-lg-5">
          {stepMap.map((step, index) => (
            <React.Fragment key={index}>
              <Col
                className={`d-flex justify-content-center p-0 ${
                  index === currentStep
                    ? "active-step"
                    : index < currentStep
                    ? "completed-step"
                    : ""
                }`}
                onClick={() => navigate(step.path)}
                style={{ cursor: "pointer" }}
              >
                <div className="flexWrapper text-center">
                  {step.icon}
                  <p className="m-0 d-none d-lg-flex">{step.label}</p>
                </div>
              </Col>
              {index < stepMap.length - 1 && <div className="divider" />}
            </React.Fragment>
          ))}
        </Row>
      </Container>

      <div className="checkout-content">
        <Outlet /> {/* 👈 Step content appears here */}
      </div>
    </>
  );
}

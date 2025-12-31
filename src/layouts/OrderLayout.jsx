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
    { path: "/checkout/", label: " بررسی سبد خرید", icon: <CartCheck size={36} /> },
    {
      path: "/checkout/info",
      label: "اطلاعات ارسال",
      icon: <UiChecks size={36} />,
    },
    {
      path: "/checkout/payment",
      label: "پرداخت",
      icon: <CreditCard size={36} />,
    },
    {
      path: "/checkout/confirmation",
      label: "پایان خرید ",
      icon: <Check2Circle size={36} />,
    },
  ];

  const currentStep = stepMap.findIndex((s) => location.pathname === s.path);

  return (
    <>
      <Container dir="rtl">
        <Row className="align-items-center p-3 pe-5 ps-5 m-lg-5 mb-lg-2 mt-lg-3">
          {stepMap.map((step, index) => (
            <React.Fragment key={index}>
              <Col
                className={`d-flex justify-content-center p-0 ${
                  index === currentStep
                    ? "active-step"
                    : index < currentStep
                    ? "completed-step"
                    : "deactive"
                }`}
                onClick={() => navigate(step.path)}
                style={{ cursor: "pointer" }}
              >
                <div className="flexWrapper text-center">
                  {step.icon}
                  <p className="mt-1 d-none d-lg-flex">{step.label}</p>
                </div>
              </Col>
              {index < stepMap.length - 1 && (
                <div
                  className={`divider ${
                    index === currentStep
                      ? "dactive-step"
                      : index < currentStep
                      ? "dcompleted-step"
                      : "deActive"
                  }`}
                />
              )}
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

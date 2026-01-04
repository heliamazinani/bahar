import React from "react";
import { CheckoutProvider } from "../features/orders/context/CheckoutContext";
import { useCheckout } from "../features/orders/context/CheckoutContext";
import { Container, Col, Row, Button } from "react-bootstrap";
import {
  CartCheck,
  UiChecks,
  CreditCard,
  Check2Circle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "react-bootstrap-icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useCart } from "@/cart/CartContext"; // later for real total

export default function OrderLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isStepValid } = useCheckout();

  // const { finalTotal } = useCart(); // later

  const stepMap = [
    {
      path: "/checkout/",
      label: "بررسی سبد خرید",
      icon: <CartCheck size={36} />,
    },
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
      label: "پایان خرید",
      icon: <Check2Circle size={36} />,
    },
  ];

  const currentStep = stepMap.findIndex((s) => location.pathname === s.path);

  const currentStepData = stepMap[currentStep];
  const isMobile = window.innerWidth < 992;

  return (
    <>
      {/* ================= MOBILE HEADER ================= */}
      {isMobile && (
        <div className="mobile-checkout-header">
          <button
            className="back-icon"
            onClick={() => navigate(-1)}
            aria-label="بازگشت"
          >
            <ArrowRight size={22} />
          </button>

          <span className="mobile-step-text">
            مرحله {currentStep + 1} از {stepMap.length} –{" "}
            {currentStepData?.label}
          </span>
        </div>
      )}

      {/* ================= DESKTOP STEPPER ================= */}
      <Container dir="rtl" className="d-none d-lg-block">
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
                    index < currentStep ? "dcompleted-step" : "deActive"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </Row>
      </Container>

      {/* ================= CHECKOUT CONTENT ================= */}
      <div className="checkout-content ">
        <CheckoutProvider>
          <Outlet />
        </CheckoutProvider>
      </div>
      {!isMobile && (
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <Button
                  className="navigationNext"
                  // disabled={items.length === 0}
                  onClick={() => {
                    if (currentStep < stepMap.length - 1) {
                      navigate(stepMap[currentStep + 1].path);
                    }
                  }}
                >
                  <ChevronLeft /> ثبت سفارش
                </Button>

                <Button className="navigationPrev" onClick={() => navigate(-1)}>
                  بازگشت <ChevronRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {/* ================= MOBILE FOOTER ================= */}
      {isMobile && (
        <div className="mobile-checkout-footer">
          <div className="total">
            <span>مبلغ قابل پرداخت</span>
            {/* replace with finalTotal later */}
            <strong>۱٬۲۴۰٬۰۰۰ تومان</strong>
          </div>

          <button
            className="next-step-btn"
            // disabled={!isStepValid}
            onClick={() => {
              if (currentStep < stepMap.length - 1) {
                navigate(stepMap[currentStep + 1].path);
              }
            }}
          >
            ادامه
          </button>
        </div>
      )}
    </>
  );
}

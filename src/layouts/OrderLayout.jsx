import React from "react";
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
import {
  CheckoutProvider,
  useCheckout,
} from "../features/orders/context/CheckoutContext";

function OrderLayoutInner() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isStepValid } = useCheckout();

  const stepMap = [
    {
      path: "/checkout",
      label: "بررسی سبد خرید",
      nextLabel: "ثبت سفارش",
      icon: <CartCheck size={36} />,
    },
    {
      path: "/checkout/info",
      label: " اطلاعات ارسال",
      nextLabel: "نهایی‌سازی اطلاعات",
      icon: <UiChecks size={36} />,
    },
    {
      path: "/checkout/payment",
      label: "پرداخت",
      nextLabel: "ثبت نهایی سفارش",
      icon: <CreditCard size={36} />,
    },
    {
      path: "/checkout/confirmation",
      label: "پایان خرید",
      icon: <Check2Circle size={36} />,
    },
  ];

  const currentStep = stepMap.findIndex((s) => s.path === location.pathname);

  const current = stepMap[currentStep];
  const next = stepMap[currentStep + 1];
  const prev = stepMap[currentStep - 1];

  const isMobile = window.innerWidth < 448;

  const goNext = () => {
    // if (next && isStepValid) {
    //   navigate(next.path);
    // }
        if (next ) {
          navigate(next.path);
        }
  };

  const goPrev = () => {
    if (prev) {
      navigate(prev.path);
    }
    else{
      navigate("/")
    }
  };



  return (
    <>
      {isMobile && (
        <div className="mobile-checkout-header" dir="rtl">
          {prev && (
            <button className="back-icon" onClick={goPrev}>
              <ArrowRight size={22} />
            </button>
          )}
          {currentStep === 0 && (
            <button
              className="back-icon"
              onClick={() => {
                navigate("/");
              }}
            >
              <ArrowRight size={22} />
            </button>
          )}
          <span>{current.label}</span>
          <span className="mobile-step-text text-muted">
            مرحله {currentStep + 1} از {stepMap.length}
          </span>
        </div>
      )}

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
                onClick={() => index <= currentStep && navigate(step.path)}
                style={{ cursor: index <= currentStep ? "pointer" : "default" }}
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

      <div className={`checkout-content ${!isMobile ? "pb-0" : ""}`}>
        <Outlet />
      </div>

      {!isMobile && (
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                {next && (
                  <Button
                    className="navigationNext"
                    // disabled={!isStepValid}
                    onClick={goNext}
                  >
                    <ChevronLeft /> {current.nextLabel}
                  </Button>
                )}
                <Button
                  className="navigationPrev"
                  variant="outline-secondary"
                  // disabled={!prev}
                  onClick={goPrev}
                >
                  بازگشت <ChevronRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {isMobile && next && (
        <div className="mobile-checkout-footer">
          <div className="total">
            <span>مبلغ قابل پرداخت</span>
            <strong>۱٬۲۴۰٬۰۰۰ تومان</strong>
          </div>

          <button
            className="next-step-btn"
            // disabled={!isStepValid}
            onClick={goNext}
          >
            {current.nextLabel}
          </button>
        </div>
      )}
    </>
  );
}

export default function OrderLayout() {
  return (
    <CheckoutProvider>
      <OrderLayoutInner />
    </CheckoutProvider>
  );
}

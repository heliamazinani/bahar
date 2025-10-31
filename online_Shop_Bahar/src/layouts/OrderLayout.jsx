import React from "react";
import AdminNav from "../components/AdminNav/AdminNav";
import { Container, Col, Row } from "react-bootstrap";
import {
  CartCheck,
  UiChecks,
  CreditCard,
  Check2Circle,
} from "react-bootstrap-icons";

export default function OrderLayout({ children }) {
  return (
    <>
      <Container dir="rtl">
        <Row className="align-items-center p-5 m-lg-5">
          <Col className="d-lg-flex justify-content-center p-0">
            <div className="flexWrapper">
              <CartCheck size={25} />
              <p className="m-0  d-none d-lg-flex  d-none d-lg-flex">بررسی سبد خرید</p>
            </div>
          </Col>
          <div className="divider" />
          <Col className="d-flex justify-content-center p-0">
            <div className="flexWrapper">
              <UiChecks size={25} />
              <p className="m-0  d-none d-lg-flex">بررسی سبد خرید</p>
            </div>
          </Col>
          <div className="divider" />
          <Col className="d-flex justify-content-center p-0">
            <div className="flexWrapper">
              <CreditCard size={25} sizeLg={80} />
              <p className="m-0  d-none d-lg-flex">بررسی سبد خرید</p>
            </div>
          </Col>
          <div className="divider" />
          <Col className="d-flex justify-content-center p-0">
            <div className="flexWrapper">
              <Check2Circle size={25} />
              <p className="m-0  d-none d-lg-flex">بررسی سبد خرید</p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="admin-layout">{children}</div>
    </>
  );
}

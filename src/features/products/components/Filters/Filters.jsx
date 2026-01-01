import { Row, Col, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import ProductList from "../ProductList/ProductList";
import "./Filter.css";

function Filters({ title }) {
  const [onSale, setOnSale] = useState(false);
  return (
    <div className="filters">
      <div className="title-container">
        <div className="title">
          <p> دسته بندی {title}</p>
        </div>
      </div>
      <div className="filters-container mb-4">
        <Row className="g-2 align-items-center">
          {/* On Sale Toggle */}
          {/* <Col
            xs={12}
            sm={6}
            md={3}
            className="d-flex align-items-center"
            dir="rtl"
          >
            <Form.Label className="filter-label">تخفیف‌دار</Form.Label>

        
            <div className="switch-wrapper">
              <Form.Check
                type="switch"
                id="onsale-switch"
                checked={onSale}
                onChange={() => setOnSale(!onSale)}
                className="onsale-switch"
              />
            </div>
          </Col> */}

          {/* Price Range */}
          <Col xs={12} sm={12} md={6} dir="rtl">
            <Form.Label className="filter-label">محدوده قیمت</Form.Label>
            <div className="d-flex align-items-center gap-2">
              <Form.Control type="number" placeholder="از قیمت" min="0" />
              <span>-</span>
              <Form.Control type="number" placeholder="تا قیمت" min="0" />
            </div>
          </Col>

          {/* Sorting */}
          <Col xs={12} md={6} dir="rtl">
            <Form.Label className="filter-label"> ترتیب نمایش</Form.Label>
            <Form.Select className="w-100">
              <option value="">انتخاب</option>
              <option value="price-asc">قیمت (کم به زیاد)</option>
              <option value="price-desc">قیمت (زیاد به کم)</option>
              <option value="newest">جدیدترین</option>
              <option value="bestselling">پرفروش‌ترین</option>
            </Form.Select>
          </Col>
        </Row>
      </div>
      <ProductList></ProductList>
    </div>
  );
}
export default Filters;

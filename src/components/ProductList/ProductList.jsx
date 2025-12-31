import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../DummyData/Products";
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const toFarsiNumber = (number) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .split("")
    .map((digit) => farsiDigits[parseInt(digit)])
    .join("");
};

function ProductList() {
  const itemsPerPage = 16; // ✅ how many cards per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Container className="py-5">
      <Row className="g-4 justify-content-center">
        {currentItems.map((product) => (
          <Col
            key={product.id}
            xs={6}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item
              className="pageNum"
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => handlePageChange(i + 1)}
            >
              {toFarsiNumber(i + 1)}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </Container>
  );
}

export default ProductList;

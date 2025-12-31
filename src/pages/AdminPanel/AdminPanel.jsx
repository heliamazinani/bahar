import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    onSale: false,
    newPrice: "",
    category: "",
    description: "",
    image: "",
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  // Save to localStorage on every change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleOpenModal = (index = null) => {
    if (index !== null) {
      setEditIndex(index);
      setFormData(products[index]);
    } else {
      setEditIndex(null);
      setFormData({
        name: "",
        price: "",
        onSale: false,
        newPrice: "",
        category: "",
        description: "",
        image: "",
      });
    }
    setShowModal(true);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = formData;
      setProducts(updated);
    } else {
      setProducts([...products, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  // Convert uploaded file to base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container mt-4">


      <div className="d-flex justify-content-end mb-3">
        <Button onClick={() => handleOpenModal()}>➕ افزودن محصول جدید</Button>
      </div>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>تصویر</th>
            <th>نام</th>
            <th>قیمت</th>
            <th>تخفیف</th>
            <th>دسته</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                هیچ محصولی وجود ندارد
              </td>
            </tr>
          ) : (
            products.map((p, index) => (
              <tr key={p.id}>
                <td>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    "—"
                  )}
                </td>
                <td>{p.name}</td>
                <td>{p.price} تومان</td>
                <td>{p.onSale ? p.newPrice + " تومان" : "—"}</td>
                <td>{p.category}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleOpenModal(index)}
                  >
                    ✏️ ویرایش
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(index)}
                  >
                    🗑 حذف
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex !== null ? "ویرایش محصول" : "افزودن محصول جدید"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>نام محصول</Form.Label>
              <Form.Control
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>قیمت (تومان)</Form.Label>
              <Form.Control
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </Form.Group>
            <Form.Check
              type="switch"
              id="onSaleSwitch"
              label="این محصول تخفیف دارد"
              checked={formData.onSale}
              onChange={(e) =>
                setFormData({ ...formData, onSale: e.target.checked })
              }
            />
            {formData.onSale && (
              <Form.Group className="mb-3 mt-2">
                <Form.Label>قیمت با تخفیف (تومان)</Form.Label>
                <Form.Control
                  type="number"
                  value={formData.newPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, newPrice: e.target.value })
                  }
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label>دسته بندی</Form.Label>
              <Form.Control
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>توضیحات</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>تصویر محصول</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="preview"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    marginTop: "10px",
                    borderRadius: "8px",
                  }}
                />
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            بستن
          </Button>
          <Button variant="primary" onClick={handleSave}>
            ذخیره
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

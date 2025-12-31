import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Eye, EyeSlash, Google, Facebook } from "react-bootstrap-icons";
import "../Auth.css";
import { registerUser } from "../auth.service";

function AuthPage() {
  const [tab, setTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("login", loginData);
  };

  return (
    <div className="auth-overlay">
      <div className="auth-page" dir="rtl">
        <Container className="auth-container">
          <Row className="align-items-center">
            {/* left visual */}
            <Col lg={6} className="auth-visual d-none d-lg-flex">
              <div className="visual-inner">
                <h2>به بهار بیوتی خوش آمدید</h2>
                <p>همین حالا عضو شوید و از تخفیفات انحصاری بهره‌مند شوید.</p>
                <div className="visual-cta">
                  <Button variant="light" className="me-2">
                    مشاهده محصولات
                  </Button>
                </div>
              </div>
            </Col>

            {/* right: forms */}
            <Col xs={12} lg={6}>
              <div className="auth-card">
                <div className="auth-tabs">
                  <button
                    className={tab === "login" ? "tab active" : "tab"}
                    onClick={() => setTab("login")}
                  >
                    ورود
                  </button>
                  <button
                    className={tab === "register" ? "tab active" : "tab"}
                    onClick={() => setTab("register")}
                  >
                    عضویت
                  </button>
                </div>

                {tab === "login" && (
                  <Form onSubmit={handleLoginSubmit} className="auth-form">
                    <Form.Group className="mb-3" controlId="loginEmail">
                      <Form.Label>ایمیل یا شماره</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ایمیل یا شماره خود را وارد کنید"
                        value={loginData.email}
                        onChange={(e) =>
                          setLoginData({ ...loginData, email: e.target.value })
                        }
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginPassword">
                      <Form.Label>کلمه عبور</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="کلمه عبور"
                          value={loginData.password}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              password: e.target.value,
                            })
                          }
                          required
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => setShowPassword((s) => !s)}
                          className="icon-btn"
                        >
                          {showPassword ? <EyeSlash /> : <Eye />}
                        </Button>
                      </InputGroup>
                    </Form.Group>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <a className="forgot-link" href="#forgot">
                        کلمه عبور را فراموش کرده‌اید؟
                      </a>
                    </div>

                    <div className="d-grid mb-3">
                      <Button type="submit" className="submit-btn">
                        ورود به حساب
                      </Button>
                    </div>

                    <div className="divider">یا با</div>

                    <div className="socials d-flex gap-2">
                      <Button variant="light" className="social-btn">
                        <Google /> گوگل
                      </Button>
                      <Button variant="light" className="social-btn">
                        <Facebook /> فیسبوک
                      </Button>
                    </div>
                  </Form>
                )}

                {tab === "register" && (
                  <Form
                    onSubmit={() => {
                      const { confirm, ...dataWithoutConfirm } =
                        regData;
                      result = registerUser(dataWithoutConfirm);
                    }}
                    className="auth-form"
                  >
                    <Form.Group className="mb-3" controlId="regName">
                      <Form.Label>نام و نام خانوادگی</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="نام و نام خانوادگی"
                        value={regData.name}
                        onChange={(e) =>
                          setRegData({ ...regData, name: e.target.value })
                        }
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="regEmail">
                      <Form.Label>ایمیل</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="ایمیل"
                        value={regData.email}
                        onChange={(e) =>
                          setRegData({ ...regData, email: e.target.value })
                        }
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="regPassword">
                      <Form.Label>کلمه عبور</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showRegPassword ? "text" : "password"}
                          placeholder="کلمه عبور"
                          value={regData.password}
                          onChange={(e) =>
                            setRegData({
                              ...regData,
                              password: e.target.value,
                            })
                          }
                          required
                          minLength={6}
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => setShowRegPassword((s) => !s)}
                          className="icon-btn"
                        >
                          {showRegPassword ? <EyeSlash /> : <Eye />}
                        </Button>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        حداقل ۶ کاراکتر
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="regConfirm">
                      <Form.Label>تکرار کلمه عبور</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="کلمه عبور را تکرار کنید"
                        value={regData.confirm}
                        onChange={(e) =>
                          setRegData({ ...regData, confirm: e.target.value })
                        }
                        required
                      />
                    </Form.Group>

                    <div className="d-grid mb-3">
                      <Button type="submit" className="submit-me">
                        عضویت
                      </Button>
                    </div>

                    <div className="divider">یا با</div>

                    <div className="socials d-flex gap-2">
                      <Button variant="light" className="social-btn">
                        <Google /> گوگل
                      </Button>
                      <Button variant="light" className="social-btn">
                        <Facebook /> فیسبوک
                      </Button>
                    </div>
                  </Form>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AuthPage;

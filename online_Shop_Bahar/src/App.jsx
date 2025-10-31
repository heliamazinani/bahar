import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar_menu from "./components/Navbar/Navbar_menu";
import Products from "./pages/Products/Products";
import AuthPage from "./pages/AuthPage/AuthPage";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ScrollToTop from "./components/ScrollToTop";
import ProductPage from "./pages/ProductPage/ProductPage";
import OrderLayout from "./layouts/OrderLayout";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import CartStep from "./components/Checkout/CartStep/CartStep";
import InfoStep from "./components/Checkout/InfoStep/InfoStep";
import PaymentStep from "./components/Checkout/PaymentStep/PaymentStep";
import ConfirmationStep from "./components/Checkout/ConfirmationStep/ConfirmationStep";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/products"
            element={
              <MainLayout>
                <Products />
              </MainLayout>
            }
          />
          <Route
            path="/product/:id"
            element={
              <MainLayout>
                <ProductPage />
              </MainLayout>
            }
          />
          <Route path="/checkout" element={<OrderLayout />}>
            <Route index element={<CartStep />} />
            <Route path="info" element={<InfoStep/>} />
            <Route path="payment" element={<PaymentStep />} />
            <Route
              path="confirmation"
              element={<ConfirmationStep/>}
            />
          </Route>

          <Route
            path="/admin"
            element={
              <AdminLayout>
                <AdminPanel />
              </AdminLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

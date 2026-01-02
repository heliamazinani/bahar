import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./features/home/pages/Home/Home";

import Products from "./features/products/pages/Products/Products";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ScrollToTop from "./shared/components/ScrollToTop";
import ProductPage from "./features/products/pages/ProductPage/ProductPage";
import OrderLayout from "./layouts/OrderLayout";
import CheckoutPage from "./features/orders/pages/CheckoutPage/CheckoutPage";
import CartStep from "./features/orders/components/Checkout/CartStep/CartStep";
import InfoStep from "./features/orders/components/Checkout/InfoStep/InfoStep";
import PaymentStep from "./features/orders/components/Checkout/PaymentStep/PaymentStep";
import ConfirmationStep from "./features/orders/components/Checkout/ConfirmationStep/ConfirmationStep";
import AuthPage from "./features/auth/pages/AuthPage";

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
          <Route path="/auth" element={<AuthPage />} />
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
            <Route path="info" element={<InfoStep />} />
            <Route path="payment" element={<PaymentStep />} />
            <Route path="confirmation" element={<ConfirmationStep />} />
          </Route>
          <Route
            path="/auth"
            element={
            
                <AuthPage />
             
            }
          />
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

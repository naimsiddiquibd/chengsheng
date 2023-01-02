import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import OrderPage from './Pages/Home/OrderPage/OrderPage';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Products from "./Pages/Home/Products/Products";
import SingleProduct from "./Pages/Home/SingleProduct/SingleProduct";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orderpage" element={<PrivateRoute>
              <OrderPage />
            </PrivateRoute>}>
          </Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

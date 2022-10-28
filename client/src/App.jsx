import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Orders from "./pages/OrderList";
import ForgotPassword from "./pages/Forgot-Password";
import User from "./pages/User";
import ChangePassword from "./pages/Change-Password";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/products/:category" element={<ProductList e />} />
      </Routes>
      <Routes>
        <Route exact path="/product/:id" element={<Product e />} />
      </Routes>
      <Routes>
        <Route exact path="/cart" element={<Cart e />} />
      </Routes>
      <Routes>
        <Route exact path="/success" element={<Success e />} />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login e />}
        />
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register e />}
        />
      </Routes>
      <Routes>
        <Route exact path="/orders" element={<Orders e />} />
      </Routes>
      <Routes>
        <Route exact path="/forgot-password" element={<ForgotPassword e />} />
      </Routes>
      <Routes>
        <Route exact path="/users" element={<User e />} />
      </Routes>
      <Routes>
        <Route exact path="/change-password" element={<ChangePassword e />} />
      </Routes>
    </Router>
  );
};

export default App;

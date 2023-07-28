import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gate from "./Gate";
import Admin_Home from "./admin/pages/Admin_Home";
import Admin_Layout from "./admin/components/organisme/Admin_Layout";
import User_Layout from "./user/components/organisme/User_Layout";
import User_Home from "./user/pages/User_Home";
import User_ProductDetails from "./user/pages/User_ProductDetails";
import Admin_Products from "./admin/pages/Admin_Products";
import Admin_Sales from "./admin/pages/Admin_Sales";
import Admin_Settings from "./admin/pages/Admin_Settings";

const userRoute = () => (
  <>
    <Route path="/user/home" element={<User_Home />} />
    <Route path="/user/product/:id" element={<User_ProductDetails />} />
  </>
);

const adminRoute = () => (
  <>
    <Route path="/admin/home" element={<Admin_Home />} />
    <Route path="/admin/products" element={<Admin_Products />} />
    <Route path="/admin/sales" element={<Admin_Sales />} />
    <Route path="/admin/settings" element={<Admin_Settings />} />
  </>
);

function App() {
  return (
    <Routes>
      <Route index element={<Gate />} />
      <Route element={<User_Layout />}>{userRoute()}</Route>
      <Route element={<Admin_Layout />}>{adminRoute()}</Route>
    </Routes>
  );
}

export default App;

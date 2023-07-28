import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gate from "./Gate";
import Admin_Home from "./admin/pages/Admin_Home";
import Admin_Layout from "./admin/components/organisme/Admin_Layout";
import User_Layout from "./user/components/organisme/User_Layout";
import User_Home from "./user/pages/User_Home";

const adminRoute = () => (
  <>
    <Route path="/admin/home" element={<Admin_Home />} />
  </>
);
const userRoute = () => (
  <>
    <Route path="/user/home" element={<User_Home />} />
  </>
);

function App() {
  return (
    <Routes>
      <Route index element={<Gate />} />
      <Route element={<Admin_Layout />}>{adminRoute()}</Route>
      <Route element={<User_Layout />}>{userRoute()}</Route>
    </Routes>
  );
}

export default App;

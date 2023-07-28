import { Outlet } from "react-router-dom";

function Admin_Layout() {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

export default Admin_Layout;

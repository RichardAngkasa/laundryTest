import { Link, Outlet } from "react-router-dom";

function Admin_Layout() {
  return (
    <div>
      <div className="Space-y-4 p-4 border border-black">
        <Link to="/admin/home" className="border border-black p-2">
          BeLaundry
        </Link>
        <Link to="/admin/home" className="border border-black p-2">
          Home
        </Link>
        <Link to="/admin/products" className="border border-black p-2">
          Products
        </Link>
        <Link to="/admin/sales" className="border border-black p-2">
          Sales
        </Link>
        <Link to="/admin/settings" className="border border-black p-2">
          Setting
        </Link>
      </div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

export default Admin_Layout;

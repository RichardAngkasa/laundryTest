import { Outlet } from "react-router-dom";

function User_Layout() {
  return (
    <div className="bg-primary-200">
      <Outlet />
    </div>
  );
}

export default User_Layout;

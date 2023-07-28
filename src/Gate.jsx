import { Link } from "react-router-dom";

function Gate() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex gap-4">
        <Link
          to="/user/home"
          className="px-4 py-2 border border-black rounded-md"
        >
          User
        </Link>
        <Link
          to="/admin/home"
          className="px-4 py-2 border border-black rounded-md"
        >
          Admin
        </Link>
      </div>
    </div>
  );
}

export default Gate;

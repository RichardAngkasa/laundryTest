import { useNavigate } from "react-router-dom";

function User_ProductCard({ data }) {
  const navigate = useNavigate()
  return (
    <div className="border border-black p-4">
      {data && (
        <div  onClick={() => navigate(`/user/product/${data.id}`)}>
          <img src={data.image} alt="" />
          <div>{data.name}</div>
        </div>
      )}
    </div>
  );
}

export default User_ProductCard;

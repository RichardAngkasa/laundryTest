import { useEffect, useState } from "react";
import { get } from "../../services/User_Service";
import User_ProductCard from "../atoms/User_ProductCard";

function User_Products() {
  const [data, setData] = useState();
  useEffect(() => {
    get
      .getAllProduct()
      .then((results) => {
        setData(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("products: ", data?.response);
  return (
    <div className="overflow-scroll">
      <div className="flex gap-4">
        {data?.response.map((unit, index) => (
          <div key={index}>
            <User_ProductCard data={unit} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default User_Products;

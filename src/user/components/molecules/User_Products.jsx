import { useEffect, useState } from "react";
import { getDepOptimizationConfig } from "vite";

function User_Products() {
    const [data, setData] = useState();
    useEffect(() => {
      getDepOptimizationConfig
        .getAllProduct()
        .then((results) => {
          setData(results);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    console.log(data);
  return (
    <div>User_Products</div>
  )
}

export default User_Products
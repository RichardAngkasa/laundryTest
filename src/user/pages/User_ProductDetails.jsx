import { useEffect, useState } from "react";
import { get } from "../services/User_Service";
import { useParams } from "react-router-dom";

function User_ProductDetails() {
    const [data, setData] = useState();
    const param = useParams()
    useEffect(() => {
      get
        .getProductDetails(param.id)
        .then((results) => {
          setData(results.response);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    console.log("product details: ", data);
  return (
    <div>{data && <>{data.name}</>}</div>
  )
}

export default User_ProductDetails
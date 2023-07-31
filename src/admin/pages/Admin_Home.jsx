import { useState, useEffect } from "react";
import { get } from "../services/Admin_Service";

function Admin_Home() {
  const [data, setData] = useState();
  useEffect(() => {
    get
      .getProductSold()
      .then((results) => {
        setData(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("product sold: ", data);
  return (
    <div>
      {data &&
        data.map((unit, index) => (
          <div className="border border-black mb-2" key={index}>
            <div>{unit.created_at}</div>
            <div>{unit.income}</div>
            <div>{unit.total}</div>
          </div>
        ))}
    </div>
  );
}

export default Admin_Home;

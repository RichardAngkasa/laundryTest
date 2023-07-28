import { useEffect, useState } from "react";
import { get } from "../../services/User_Service";

function User_Hero() {
  const [data, setData] = useState();
  useEffect(() => {
    get
      .getUserInfo()
      .then((results) => {
        setData(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(data);
  return (
    <div>
      <div className="container mx-auto px-4">User_Hero</div>
    </div>
  );
}

export default User_Hero;

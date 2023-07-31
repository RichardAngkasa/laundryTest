import React, { useEffect, useState } from "react";
import { get, post } from "../services/Admin_Service";

const initData = {
  name: "Sendal Swallow Biru",
  description: "Sendal Swallow Biru no.12",
  sku: "SWBL",
  stock: 2,
  category_id: 2,
  price: 12000,
  image:
    "https://m.media-amazon.com/images/I/51FIaqed1eL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
};

function Admin_Products() {
  const [data, setData] = useState(initData);
  const [category, setCategory] = useState([]);

  const handlePost = () => {
    post
      .postProduct(data)
      .then((results) => {
        setData(results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    get
      .getCategory()
      .then((results) => {
        setCategory(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePost();
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={data.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          SKU:
          <input type="text" name="sku" value={data.sku} onChange={handleChange} />
        </label>
        <br />
        <label>
          Stock:
          <input type="number" name="stock" value={data.stock} onChange={handleChange} />
        </label>
        <br />
        <label>
          Category:
          <select name="category_id" value={data.category_id} onChange={handleChange}>
            {category?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={data.price} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" name="image" value={data.image} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin_Products;

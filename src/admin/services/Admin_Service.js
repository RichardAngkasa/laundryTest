const getProductSold = async () => {
  try {
    const response = await fetch(
      "https://belaundry-api.sebaris.link/platform/product/report",
      {
        method: "GET",
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTAzNTc4Mzd9.ILF698ktm1Zw_ssLXsmCAMAGEz3_LIVA3_XWXcHWK0k",
        },
      }
    );
    const response_1 = await response.json();
    return response_1;
  } catch (error) {
    console.error(error);
  }
};

const getCategory = async () => {
  try {
    const response = await fetch(
      "http://belaundry-api.sebaris.link/platform/product/categories",
      {
        method: "GET",
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTAzNTc4Mzd9.ILF698ktm1Zw_ssLXsmCAMAGEz3_LIVA3_XWXcHWK0k",
        },
      }
    );
    const response_1 = await response.json();
    return response_1;
  } catch (error) {
    console.error(error);
  }
};

const postProduct = async (data) => {
  try {
    const response = await fetch(
      "https://belaundry-api.sebaris.link/platform/product",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data?.name,
          description: data?.description,
          sku: data?.sku,
          stock: data?.stock,
          category_id: data?.category_id,
          price: data?.price,
          image: data?.image,
        }),
      }
    );
    const response_1 = response.json();
    return response_1;
  } catch (error) {
    console.error(error);
  }
};

const get = {
  getProductSold,
  getCategory,
};

const post = {
  postProduct,
};

export { post, get };

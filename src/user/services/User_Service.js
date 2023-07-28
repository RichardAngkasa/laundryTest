const getAllProduct = async () => {
  try {
    const response = await fetch(
      "https://belaundry-api.sebaris.link/platform/product",
      {
        method: "GET",
        headers: {
            token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTAzNTc4Mzd9.ILF698ktm1Zw_ssLXsmCAMAGEz3_LIVA3_XWXcHWK0k"
        },
      }
    );
    const response_1 = await response.json();
    return response_1.results;
  } catch (err) {
    return console.error(err);
  }
};

const getUserInfo = async () => {
    try {
        const response = await fetch(
            "https://belaundry-api.sebaris.link/platform/user/info",
            {
                method: "GET",
                headers: {
                    token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTAzNTc4Mzd9.ILF698ktm1Zw_ssLXsmCAMAGEz3_LIVA3_XWXcHWK0k"
                }
            }
        )
        const response_1 = await response.json()
        return response_1.results
    } catch (error) {
        console.error(error)
    }
}

const get = {
  getAllProduct,
  getUserInfo
};

const post = {
  "": "",
};

export { get, post };

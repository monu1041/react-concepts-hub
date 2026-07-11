var e=`// features/products/productAPI.js\r
\r
export const fetchProductsAPI = async () => {\r
  const response = await fetch("https://fakestoreapi.com/products");\r
\r
  if (!response.ok) {\r
    throw new Error("Failed to fetch products");\r
  }\r
\r
  return response.json();\r
};`;export{e as default};
var e=`// components/ProductList.jsx\r
\r
const ProductList = ({ products }) => {\r
  return (\r
    <div className="product-list">\r
      {products.map((product) => (\r
        <div\r
          key={product.id}\r
          className="product"\r
        >\r
          <strong>{product.name}</strong>\r
\r
          <p>\${product.price}</p>\r
        </div>\r
      ))}\r
    </div>\r
  );\r
};\r
\r
export default ProductList;`;export{e as default};
var e=`const ProductList = ({ products }) => {\r
\r
  return (\r
    <div className="product-list">\r
\r
      <p>\r
        Rendering:\r
        <strong> {Math.min(products.length, 100)} </strong>\r
        of\r
        <strong> {products.length} </strong>\r
        results\r
      </p>\r
\r
\r
      {products\r
        .slice(0, 100)\r
        .map((product) => (\r
\r
          <div\r
            key={product.id}\r
            className="product"\r
          >\r
\r
            <strong>\r
              {product.name}\r
            </strong>\r
\r
            <p>\r
              \${product.price}\r
            </p>\r
\r
          </div>\r
\r
      ))}\r
\r
    </div>\r
  );\r
};\r
\r
\r
export default ProductList;`;export{e as default};
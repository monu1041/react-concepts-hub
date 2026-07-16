var e=`const ProductList = ({ products }) => {\r
\r
  return (\r
    <div>\r
      <p>\r
        Rendering:\r
        <strong> {Math.min(products.length, 100)} </strong>\r
        of\r
        <strong> {products.length} </strong>\r
        results\r
      </p>\r
\r
      <div className="product-list" style={{\r
        height: '400px',\r
        overflowY: 'auto',\r
        border: '1px solid #ddd',\r
        padding: '10px',\r
        borderRadius: '4px'\r
      }}>\r
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
      </div>\r
\r
    </div>\r
  );\r
};\r
\r
\r
export default ProductList;`;export{e as default};
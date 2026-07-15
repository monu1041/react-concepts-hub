var e=`export function generateProducts() {\r
  return Array.from({ length: 500000 }, (_, index) => ({\r
    id: index + 1,\r
    name: \`Product \${index + 1}\`,\r
    price: Math.floor(Math.random() * 1000) + 100,\r
  }));\r
}`;export{e as default};
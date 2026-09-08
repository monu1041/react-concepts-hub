var e=`let counter = 0;\r
\r
export function generateId(prefix = "id") {\r
  counter += 1;\r
\r
  return \`\${prefix}-\${Date.now()}-\${counter}-\${Math.random()\r
    .toString(36)\r
    .slice(2, 8)}\`;\r
}`;export{e as default};
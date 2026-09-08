var e=`import Toast from "./Toast";\r
\r
export default function ToastContainer({\r
  toasts,\r
  onRemove\r
}) {\r
  return (\r
    <div\r
      className="toast-container"\r
      aria-live="polite"\r
      aria-atomic="true"\r
    >\r
      {toasts.map((toast) => (\r
        <Toast\r
          key={toast.id}\r
          toast={toast}\r
          onRemove={onRemove}\r
        />\r
      ))}\r
    </div>\r
  );\r
}`;export{e as default};
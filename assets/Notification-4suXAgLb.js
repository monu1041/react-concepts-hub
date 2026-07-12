var e=`import { useDispatch, useSelector } from "react-redux";\r
import {\r
  showNotification,\r
  hideNotification,\r
} from "./notificationSlice";\r
\r
const Notification = () => {\r
  const dispatch = useDispatch();\r
\r
  const notification = useSelector(\r
    (state) => state.notification\r
  );\r
\r
  return (\r
    <div style={{ padding: "20px" }}>\r
      <button\r
        onClick={() =>\r
          dispatch(\r
            showNotification({\r
              message: "Product Added Successfully!",\r
              type: "success",\r
            })\r
          )\r
        }\r
      >\r
        Show Notification\r
      </button>\r
\r
      <button\r
        onClick={() => dispatch(hideNotification())}\r
        style={{ marginLeft: "10px" }}\r
      >\r
        Hide Notification\r
      </button>\r
\r
      {notification.visible && (\r
        <div\r
          style={{\r
            marginTop: "20px",\r
            border: "1px solid green",\r
            padding: "10px",\r
          }}\r
        >\r
          <h3>{notification.type}</h3>\r
          <p>{notification.message}</p>\r
        </div>\r
      )}\r
    </div>\r
  );\r
};\r
\r
export default Notification;`;export{e as default};
import { useDispatch, useSelector } from "react-redux";
import {
  showNotification,
  hideNotification,
} from "./notificationSlice";

const Notification = () => {
  const dispatch = useDispatch();

  const notification = useSelector(
    (state) => state.notification
  );

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() =>
          dispatch(
            showNotification({
              message: "Product Added Successfully!",
              type: "success",
            })
          )
        }
      >
        Show Notification
      </button>

      <button
        onClick={() => dispatch(hideNotification())}
        style={{ marginLeft: "10px" }}
      >
        Hide Notification
      </button>

      {notification.visible && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid green",
            padding: "10px",
          }}
        >
          <h3>{notification.type}</h3>
          <p>{notification.message}</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
import { Provider } from "react-redux";
import { store } from "./app/store";
import Notification from "./features/notifications/Notification";

function App() {
  return (
    <Provider store={store}>
      <Notification />
    </Provider>
  );
}

export default App;
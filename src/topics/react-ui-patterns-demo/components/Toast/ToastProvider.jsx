import {
  useCallback,
  useMemo,
  useState
} from "react";

import ToastContext from "./ToastContext";

import { createPortal } from "react-dom";

import ToastContainer from "./ToastContainer";
import { generateId } from "../../utils/generateId";

const DEFAULT_DURATION = 4000;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  }, []);

  const showToast = useCallback(
    ({
      message,
      type = "info",
      duration = DEFAULT_DURATION
    }) => {
      const id = generateId("toast");

      setToasts((currentToasts) => [
        ...currentToasts,
        {
          id,
          message,
          type,
          duration
        }
      ]);

      return id;
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      showToast,
      removeToast
    }),
    [showToast, removeToast]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {createPortal(
        <ToastContainer
          toasts={toasts}
          onRemove={removeToast}
        />,
        document.body
      )}
    </ToastContext.Provider>
  );
}
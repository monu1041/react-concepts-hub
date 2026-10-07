
import {
  useCallback,
  useMemo,
  useState
} from "react";

import { createPortal } from "react-dom";

import ToastContainer from "./ToastContainer";
import ToastContext from "./ToastContext";

import { generateId } from "../../utils/generateId";

import "./toast.css";

const DEFAULT_DURATION = 4000;
const MAX_TOASTS = 3;

export function ToastProvider({
  children
}) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((currentToasts) =>
      currentToasts.filter(
        (toast) => toast.id !== id
      )
    );
  }, []);

  const showToast = useCallback(
    ({
      message,
      type = "info",
      duration = DEFAULT_DURATION
    }) => {
      setToasts((currentToasts) => {
        const existingToast = currentToasts.find(
          (toast) =>
            toast.message === message &&
            toast.type === type
        );

        // Same toast already exists.
        // Increase the count and restart its timer.
        if (existingToast) {
          return currentToasts.map((toast) => {
            if (toast.id !== existingToast.id) {
              return toast;
            }

            return {
              ...toast,
              count: toast.count + 1,
              timerVersion:
                toast.timerVersion + 1
            };
          });
        }

        const newToast = {
          id: generateId("toast"),
          message,
          type,
          duration,
          count: 1,
          timerVersion: 0
        };

        // Maximum number of visible toasts reached.
        // Remove the oldest toast.
        if (currentToasts.length >= MAX_TOASTS) {
          return [
            ...currentToasts.slice(1),
            newToast
          ];
        }

        return [
          ...currentToasts,
          newToast
        ];
      });
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
    <ToastContext.Provider
      value={contextValue}
    >
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
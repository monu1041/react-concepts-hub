import { useEffect } from "react";

const ICONS = {
  success: "✓",
  error: "!",
  warning: "⚠",
  info: "i"
};

export default function Toast({
  toast,
  onRemove
}) {
  const {
    id,
    type,
    message,
    duration
  } = toast;

  useEffect(() => {
    if (!duration || duration <= 0) {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      onRemove(id);
    }, duration);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [id, duration, onRemove]);

  return (
    <div
      className={`toast toast-${type}`}
      role={
        type === "error"
          ? "alert"
          : "status"
      }
    >
      <div className={`toast-icon toast-icon-${type}`}>
        {ICONS[type]}
      </div>

      <div className="toast-message">
        {message}
      </div>

      <button
        className="toast-close"
        onClick={() => onRemove(id)}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
}
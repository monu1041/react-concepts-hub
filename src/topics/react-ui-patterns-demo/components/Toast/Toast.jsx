
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
    duration,
    count,
    timerVersion
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
  }, [
    id,
    duration,
    timerVersion,
    onRemove
  ]);

  return (
    <div
      className={`toast toast-${type}`}
      role={
        type === "error"
          ? "alert"
          : "status"
      }
    >
      <div
        className={`toast-icon toast-icon-${type}`}
      >
        {ICONS[type]}
      </div>

      <div className="toast-message">
        {message}

        {count > 1 && (
          <span className="toast-count">
            ×{count}
          </span>
        )}
      </div>

      <button
        type="button"
        className="toast-close"
        onClick={() => onRemove(id)}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
}

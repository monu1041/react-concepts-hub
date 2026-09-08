import { useEffect } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

export default function useFocusTrap(
  containerRef,
  enabled = true
) {
  useEffect(() => {
    if (!enabled || !containerRef.current) {
      return undefined;
    }

    const container = containerRef.current;

    const getFocusableElements = () =>
      Array.from(
        container.querySelectorAll(FOCUSABLE_SELECTOR)
      );

    const handleKeyDown = (event) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    const focusableElements = getFocusableElements();

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else {
      container.focus();
    }

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, [containerRef, enabled]);
}
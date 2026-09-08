var e=`import { useEffect } from "react";\r
\r
const FOCUSABLE_SELECTOR = [\r
  "a[href]",\r
  "area[href]",\r
  "button:not([disabled])",\r
  "input:not([disabled])",\r
  "select:not([disabled])",\r
  "textarea:not([disabled])",\r
  "iframe",\r
  "object",\r
  "embed",\r
  "[contenteditable]",\r
  "[tabindex]:not([tabindex='-1'])"\r
].join(",");\r
\r
export default function useFocusTrap(\r
  containerRef,\r
  enabled = true\r
) {\r
  useEffect(() => {\r
    if (!enabled || !containerRef.current) {\r
      return undefined;\r
    }\r
\r
    const container = containerRef.current;\r
\r
    const getFocusableElements = () =>\r
      Array.from(\r
        container.querySelectorAll(FOCUSABLE_SELECTOR)\r
      );\r
\r
    const handleKeyDown = (event) => {\r
      if (event.key !== "Tab") {\r
        return;\r
      }\r
\r
      const focusableElements = getFocusableElements();\r
\r
      if (focusableElements.length === 0) {\r
        event.preventDefault();\r
        return;\r
      }\r
\r
      const firstElement = focusableElements[0];\r
      const lastElement =\r
        focusableElements[focusableElements.length - 1];\r
\r
      if (event.shiftKey) {\r
        if (document.activeElement === firstElement) {\r
          event.preventDefault();\r
          lastElement.focus();\r
        }\r
      } else if (document.activeElement === lastElement) {\r
        event.preventDefault();\r
        firstElement.focus();\r
      }\r
    };\r
\r
    container.addEventListener("keydown", handleKeyDown);\r
\r
    const focusableElements = getFocusableElements();\r
\r
    if (focusableElements.length > 0) {\r
      focusableElements[0].focus();\r
    } else {\r
      container.focus();\r
    }\r
\r
    return () => {\r
      container.removeEventListener("keydown", handleKeyDown);\r
    };\r
  }, [containerRef, enabled]);\r
}`;export{e as default};
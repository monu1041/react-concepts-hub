var e=`.toast-container {\r
  position: fixed;\r
  top: 24px;\r
  right: 24px;\r
\r
  z-index: 2000;\r
\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
\r
  width: min(380px, calc(100vw - 32px));\r
\r
  pointer-events: none;\r
}\r
\r
.toast {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
\r
  min-height: 60px;\r
  padding: 12px 14px;\r
\r
  background: white;\r
  border: 1px solid #e5e7eb;\r
  border-radius: 10px;\r
\r
  box-shadow:\r
    0 12px 30px rgb(15 23 42 / 15%);\r
\r
  pointer-events: auto;\r
\r
  animation: toast-enter 0.2s ease-out;\r
}\r
\r
@keyframes toast-enter {\r
  from {\r
    opacity: 0;\r
    transform: translateX(20px);\r
  }\r
\r
  to {\r
    opacity: 1;\r
    transform: translateX(0);\r
  }\r
}\r
\r
.toast-icon {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
\r
  flex: 0 0 auto;\r
\r
  width: 30px;\r
  height: 30px;\r
\r
  border-radius: 50%;\r
\r
  font-weight: 800;\r
}\r
\r
.toast-icon-success {\r
  background: #dcfce7;\r
  color: #15803d;\r
}\r
\r
.toast-icon-error {\r
  background: #fee2e2;\r
  color: #b91c1c;\r
}\r
\r
.toast-icon-warning {\r
  background: #fef3c7;\r
  color: #b45309;\r
}\r
\r
.toast-icon-info {\r
  background: #cffafe;\r
  color: #0e7490;\r
}\r
\r
.toast-message {\r
  flex: 1;\r
\r
  color: #374151;\r
\r
  font-size: 14px;\r
  line-height: 1.5;\r
}\r
\r
.toast-close {\r
  flex: 0 0 auto;\r
\r
  width: 28px;\r
  height: 28px;\r
\r
  border: 0;\r
  background: transparent;\r
\r
  color: #6b7280;\r
\r
  font-size: 20px;\r
}\r
\r
.toast-close:hover {\r
  color: #111827;\r
}`;export{e as default};
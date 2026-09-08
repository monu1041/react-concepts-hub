var e=`.modal-backdrop {\r
  position: fixed;\r
  inset: 0;\r
  z-index: 1000;\r
\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
\r
  padding: 24px;\r
\r
  background: rgb(15 23 42 / 60%);\r
  backdrop-filter: blur(2px);\r
}\r
\r
.modal {\r
  width: min(520px, 100%);\r
  max-height: calc(100vh - 48px);\r
\r
  overflow-y: auto;\r
\r
  background: white;\r
  border-radius: 14px;\r
\r
  box-shadow:\r
    0 25px 50px rgb(15 23 42 / 25%);\r
\r
  outline: none;\r
}\r
\r
.modal-header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
\r
  padding: 20px 24px;\r
\r
  border-bottom: 1px solid #e5e7eb;\r
}\r
\r
.modal-header h2 {\r
  margin: 0;\r
  font-size: 20px;\r
}\r
\r
.modal-close-button {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
\r
  width: 34px;\r
  height: 34px;\r
\r
  border: 0;\r
  border-radius: 50%;\r
\r
  background: #f3f4f6;\r
\r
  color: #374151;\r
  font-size: 24px;\r
  line-height: 1;\r
}\r
\r
.modal-close-button:hover {\r
  background: #e5e7eb;\r
}\r
\r
.modal-body {\r
  padding: 24px;\r
}\r
\r
.modal-body p {\r
  color: #4b5563;\r
  line-height: 1.6;\r
}\r
\r
.modal-example-box {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 6px;\r
\r
  margin: 20px 0;\r
  padding: 16px;\r
\r
  border: 1px solid #bfdbfe;\r
  border-radius: 8px;\r
\r
  background: #eff6ff;\r
}\r
\r
.modal-example-box span {\r
  color: #4b5563;\r
  line-height: 1.5;\r
}\r
\r
.modal-actions {\r
  display: flex;\r
  justify-content: flex-end;\r
  gap: 10px;\r
\r
  margin-top: 20px;\r
}`;export{e as default};
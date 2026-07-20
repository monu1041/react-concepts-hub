var e=`/* ================================\r
   Project: Virtual DOM & List Optimization\r
   Scope: .virtual-dom-list-optimization\r
   ================================ */\r
\r
.virtual-dom-list-optimization,\r
.virtual-dom-list-optimization *,\r
.virtual-dom-list-optimization *::before,\r
.virtual-dom-list-optimization *::after {\r
    box-sizing: border-box;\r
}\r
\r
.virtual-dom-list-optimization {\r
    width: 700px;\r
    margin: 40px auto;\r
    padding: 25px;\r
\r
    background: #f5f7fb;\r
\r
    font-family: Arial, Helvetica, sans-serif;\r
\r
    border-radius: 10px;\r
\r
    box-shadow: 0 8px 20px rgba(0, 0, 0, .08);\r
}\r
\r
.virtual-dom-list-optimization h1 {\r
    text-align: center;\r
\r
    margin-bottom: 25px;\r
\r
    color: #222;\r
}\r
\r
.virtual-dom-list-optimization hr {\r
    margin: 20px 0;\r
    border: none;\r
    border-top: 1px solid #ddd;\r
}\r
\r
.virtual-dom-list-optimization .todo-input-section {\r
    display: flex;\r
    gap: 10px;\r
}\r
\r
.virtual-dom-list-optimization input {\r
    flex: 1;\r
\r
    padding: 10px 15px;\r
\r
    border: 1px solid #ccc;\r
\r
    border-radius: 6px;\r
\r
    outline: none;\r
\r
    font-size: 15px;\r
}\r
\r
.virtual-dom-list-optimization input:focus {\r
    border-color: #1976d2;\r
}\r
\r
.virtual-dom-list-optimization button {\r
    padding: 10px 16px;\r
\r
    border: none;\r
\r
    border-radius: 6px;\r
\r
    background: #1976d2;\r
\r
    color: white;\r
\r
    cursor: pointer;\r
\r
    transition: .2s;\r
}\r
\r
.virtual-dom-list-optimization button:hover {\r
    background: #1259a8;\r
}\r
\r
.virtual-dom-list-optimization .todo-item {\r
    display: flex;\r
\r
    justify-content: space-between;\r
\r
    align-items: center;\r
\r
    margin-bottom: 12px;\r
\r
    padding: 12px 15px;\r
\r
    border: 1px solid #ddd;\r
\r
    background: white;\r
\r
    border-radius: 6px;\r
}\r
\r
.virtual-dom-list-optimization .todo-item span {\r
    font-size: 16px;\r
}\r
\r
.virtual-dom-list-optimization .todo-buttons {\r
    display: flex;\r
\r
    gap: 8px;\r
}\r
\r
.virtual-dom-list-optimization .todo-buttons button:nth-child(1) {\r
    background: #43a047;\r
}\r
\r
.virtual-dom-list-optimization .todo-buttons button:nth-child(1):hover {\r
    background: #2e7d32;\r
}\r
\r
.virtual-dom-list-optimization .todo-buttons button:nth-child(2) {\r
    background: #ff9800;\r
}\r
\r
.virtual-dom-list-optimization .todo-buttons button:nth-child(2):hover {\r
    background: #ef6c00;\r
}\r
\r
.virtual-dom-list-optimization .todo-buttons button:nth-child(3) {\r
    background: #e53935;\r
}\r
\r
.virtual-dom-list-optimization .todo-buttons button:nth-child(3):hover {\r
    background: #c62828;\r
}`;export{e as default};
var e=`.todo-app,\r
.todo-app *,\r
.todo-app *::before,\r
.todo-app *::after {\r
  margin: 0;\r
  padding: 0;\r
  box-sizing: border-box;\r
}\r
\r
.todo-app {\r
  width: 100%;\r
  max-width: 600px;\r
  margin: 40px auto;\r
  padding: 24px;\r
  background: #fff;\r
  color: #222;\r
  font-family: Arial, sans-serif;\r
  border: 1px solid #ddd;\r
  border-radius: 8px;\r
}\r
\r
/* Heading */\r
\r
.todo-app h1 {\r
  margin-bottom: 20px;\r
  text-align: center;\r
}\r
\r
/* Common */\r
\r
.todo-app button,\r
.todo-app input {\r
  font: inherit;\r
}\r
\r
.todo-app button {\r
  cursor: pointer;\r
}\r
\r
/* Todo Input */\r
\r
.todo-app .todo-input {\r
  display: flex;\r
  gap: 8px;\r
  margin-bottom: 16px;\r
}\r
\r
.todo-app .todo-input input {\r
  flex: 1;\r
  padding: 10px;\r
  border: 1px solid #ccc;\r
  border-radius: 4px;\r
}\r
\r
.todo-app .todo-input button {\r
  padding: 8px 12px;\r
  border: 1px solid #ccc;\r
  background: #f8f8f8;\r
  border-radius: 4px;\r
}\r
\r
/* Search */\r
\r
.todo-app .todo-search {\r
  margin-bottom: 12px;\r
}\r
\r
.todo-app .todo-search input {\r
  width: 100%;\r
  padding: 10px;\r
  border: 1px solid #ccc;\r
  border-radius: 4px;\r
}\r
\r
/* Filter */\r
\r
.todo-app .todo-filter {\r
  display: flex;\r
  gap: 8px;\r
  margin-bottom: 16px;\r
}\r
\r
.todo-app .todo-filter button {\r
  padding: 6px 12px;\r
  border: 1px solid #ccc;\r
  background: #fff;\r
  border-radius: 4px;\r
}\r
\r
.todo-app .todo-filter button.active {\r
  background: #222;\r
  color: #fff;\r
}\r
\r
/* Todo List */\r
\r
.todo-app .todo-list {\r
  list-style: none;\r
  border-top: 1px solid #eee;\r
}\r
\r
/* Todo Item */\r
\r
.todo-app .todo-item {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 12px;\r
  padding: 12px 0;\r
  border-bottom: 1px solid #eee;\r
}\r
\r
.todo-app .todo-item label {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.todo-app .todo-item.completed span {\r
  color: #888;\r
  text-decoration: line-through;\r
}\r
\r
.todo-app .todo-item button {\r
  padding: 8px 12px;\r
  border: 1px solid #ccc;\r
  background: #f8f8f8;\r
  border-radius: 4px;\r
}\r
\r
/* Empty State */\r
\r
.todo-app .empty-message {\r
  padding: 20px 0;\r
  color: #777;\r
  text-align: center;\r
}\r
\r
/* Footer */\r
\r
.todo-app .todo-footer {\r
  display: flex;\r
  justify-content: space-between;\r
  margin-top: 16px;\r
  color: #666;\r
  font-size: 14px;\r
}`;export{e as default};
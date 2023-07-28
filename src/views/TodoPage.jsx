import React from "react";

const TodoPage = ({ children }) => (
  <div>
    <form hx-post="/todo/add" hx-target="#todo-list" hx-swap="innerHTML">
      <input name="newItem" type="text" placeholder="Go grocery shopping..." />
      <button type="submit">Add Todo</button>
    </form>
    <br />
    <div
      id="todo-list"
      style={{ display: "flex", flexDirection: "column", gap: "1px 1px" }}
    >
      {children}
    </div>
  </div>
);

export default TodoPage;

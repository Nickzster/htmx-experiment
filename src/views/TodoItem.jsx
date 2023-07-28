import React from "react";

const TodoItem = ({ id, task, isDone }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
      <button
        hx-trigger="click"
        hx-delete="/todo/delete"
        hx-confirm="Are you sure you want to delete this item?"
        hx-vals={`{"id": ${id}}`}
        hx-target="#todo-list"
        hx-swap="innerHTML"
      >
        Delete
      </button>
      <p
        hx-trigger="click"
        hx-put="/todo/toggle"
        hx-vals={`{"id": ${id}}`}
        hx-target="#todo-list"
        hx-swap="innerHTML"
        style={{
          textDecoration: isDone ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task}
      </p>
    </div>
  );
};

export default TodoItem;

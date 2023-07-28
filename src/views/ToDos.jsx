import React from "react";
import TodoItem from "./TodoItem.jsx";

const ToDos = ({ items }) => (
  <>
    {items.length === 0 ? (
      <p>No todo items... try adding some!</p>
    ) : (
      items.map(([id, task, isDone]) => (
        <TodoItem key={id} id={id} task={task} isDone={isDone} />
      ))
    )}
  </>
);

export default ToDos;

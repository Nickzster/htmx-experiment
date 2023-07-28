import React from "react";
import express from "express";
import Layout from "../views/Layout.jsx";
import ToDos from "../views/ToDos.jsx";
import TodoPage from "../views/TodoPage.jsx";
import { createPage, createHTMLSnippet } from "../lib/pageUtils.jsx";
import { createTodoItem } from "../models/todos.js";

const router = express.Router();

let todoItems = [
  [0, "Do dishes", false],
  [1, "Take out trash", false],
  [2, "Water the backyard", true],
];

router.post("/todo/add", (req, res) => {
  if (req.body.newItem) {
    const newItemToPush = createTodoItem({
      id: todoItems.length,
      item: req.body.newItem,
      isDone: false,
    });
    console.log("Adding new item", newItemToPush);
    todoItems.push(newItemToPush);
  }
  return res.status(200).send(createHTMLSnippet(<ToDos items={todoItems} />));
});

router.put("/todo/toggle", (req, res) => {
  const id = req.body.id;
  console.log("Toggling", id);
  console.log("Todos", todoItems);

  const taskToUpdate = todoItems.find((item) => item[0] === parseInt(id, 10));
  if (taskToUpdate) {
    taskToUpdate[2] = !taskToUpdate[2];
  }
  console.log("Todos modified", todoItems);
  return res.status(200).send(createHTMLSnippet(<ToDos items={todoItems} />));
});

router.delete("/todo/delete", (req, res) => {
  const id = req.body.id;
  console.log("Deleting task", id);
  todoItems = todoItems.filter((item) => item[0] !== parseInt(id, 10));
  return res.status(200).send(createHTMLSnippet(<ToDos items={todoItems} />));
});

router.get("/todo", (req, res) =>
  res.status(200).send(
    createPage(
      "To Do",
      <Layout>
        <TodoPage>
          <ToDos items={todoItems} />
        </TodoPage>
      </Layout>
    )
  )
);

export { router };

import express from "express";
import { renderToString } from "react-dom/server";
import React from "react";

import Test from "./components/test.jsx";

const app = express();
app.use(express.urlencoded({ extended: true }));

const router = express.Router();

const createPage = (pageName, children) => `
<!DOCTYPE html>
<html>
<head>
    <script
    src="https://unpkg.com/htmx.org@1.9.4"
    integrity="sha384-zUfuhFKKZCbHTY6aRR46gxiqszMk5tcHjsVFxnUo8VMus4kHGVdIYVbOYYNlKmHV"
    crossorigin="anonymous"
    ></script>
    <title>${pageName}</title>
</head>
<body>
  ${renderToString(children)}
</body>
</html>
`;

const Layout = ({ children }) => (
  <div id="main-page">
    <nav>
      <button
        hx-get="/"
        hx-trigger="click"
        hx-target="#main-page"
        hx-swap="outerHTML"
        hx-push-url="true"
      >
        Home
      </button>
      <button
        hx-get="/todo"
        hx-trigger="click"
        hx-target="#main-page"
        hx-swap="outerHTML"
        hx-push-url="true"
      >
        To Do
      </button>
    </nav>
    <br />
    <div>{children}</div>
  </div>
);

const Home = () => {
  return (
    <>
      <div>Hello, world!</div>
      <Test />
      <div id="parent-div"></div>
    </>
  );
};

router.get("/", (req, res) =>
  res.status(200).send(
    createPage(
      "home",
      <Layout>
        <Home />
      </Layout>
    )
  )
);

router.get("/clicked", (req, res) =>
  res.status(200).send(renderToString(<div>You clicked me!</div>))
);

const todoItems = new Array(10)
  .fill([])
  .map((item, idx) => [idx, "Do dishes", false]);

const TodoItem = ({ id, task, isDone }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p
        hx-trigger="click"
        hx-post="/todo/toggle"
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

const ToDos = () => (
  <>
    {todoItems.map((item) => (
      <TodoItem id={item[0]} task={item[1]} isDone={item[2]} />
    ))}
  </>
);

router.post("/todo/add", (req, res) => {
  if (req.body.newItem) {
    const newItemToPush = [todoItems.length, req.body.newItem, false];
    console.log("Adding new item", newItemToPush);
    todoItems.push(newItemToPush);
  }
  return res.status(200).send(renderToString(<ToDos />));
});

router.post("/todo/toggle", (req, res) => {
  const id = req.body.id;
  console.log("Toggling", id);

  const taskToUpdate = todoItems[id];
  if (taskToUpdate) {
    taskToUpdate[2] = !taskToUpdate[2];
  }
  return res.status(200).send(renderToString(<ToDos />));
});

const TodoPage = ({ children }) => (
  <div>
    <form hx-post="/todo/add" hx-target="#todo-list" hx-swap="innerHTML">
      <input name="newItem" type="text" placeholder="Go grocery shopping..." />
      <button type="submit">Add Todo</button>
    </form>
    <div
      id="todo-list"
      style={{ display: "flex", flexDirection: "column", gap: "1px 1px" }}
    >
      {children}
    </div>
  </div>
);

router.get("/todo", (req, res) =>
  res.status(200).send(
    createPage(
      "To Do",
      <Layout>
        <TodoPage>
          <ToDos />
        </TodoPage>
      </Layout>
    )
  )
);

app.use(router);

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

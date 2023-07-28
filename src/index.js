import express from "express";
import { router as HomeRouter } from "./controllers/home.jsx";
import { router as TodoRouter } from "./controllers/todo.jsx";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(HomeRouter);
app.use(TodoRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

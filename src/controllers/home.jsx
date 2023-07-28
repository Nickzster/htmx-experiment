import React from "react";
import express from "express";
import { createPage, createHTMLSnippet } from "../lib/pageUtils.jsx";
import Layout from "../views/Layout.jsx";
import Home from "../views/Home.jsx";

const router = express.Router();

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
  res.status(200).send(createHTMLSnippet(<div>You clicked me!</div>))
);

export { router };

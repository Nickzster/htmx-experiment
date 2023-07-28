import React from "react";
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

export default Layout;

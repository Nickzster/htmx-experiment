import React from "react";

const Test = () => (
  <button
    hx-get="/clicked"
    hx-trigger="click"
    hx-target="#parent-div"
    hx-swap="outerHTML"
  >
    Click the React Button!
  </button>
);

export default Test;

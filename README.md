# HTMX Experiment

I created this repository to experiment with htmx, but it ended up turning into an MVC application. It is a full server-side todo application written in JavaScript using [node](https://nodejs.org/en) as the server run-time, templates created using [React](https://react.dev/) and [renderToString](https://react.dev/reference/react-dom/server/renderToString), and client-side interaction with [htmx](https://htmx.org/). Here's the project breakdown:

- `index.js` - Entry point for the application.
- `controllers/` - Controllers for the business logic. There is a `home` and a `todo` controller.
- `models/` - Contains a helper function to create a ToDo item
- `views/` - Contains all of the components using htmx for client-side interactivity.
- `lib/` - Miscellaneous helpers for rendering.

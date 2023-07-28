import React from "react";

const Page = ({ pageName, children }) => {
  return (
    <html>
      <head>
        <script
          src="https://unpkg.com/htmx.org@1.9.4"
          integrity="sha384-zUfuhFKKZCbHTY6aRR46gxiqszMk5tcHjsVFxnUo8VMus4kHGVdIYVbOYYNlKmHV"
          crossOrigin="anonymous"
        ></script>
        <title>{pageName}</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Page;

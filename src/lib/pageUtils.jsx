import React from "react";
import { renderToString } from "react-dom/server";
import Page from "../views/Page.jsx";

export const createPage = (pageName, children) => `
<!DOCTYPE html>
${renderToString(<Page pageName={pageName}>{children}</Page>)}
`;

export const createHTMLSnippet = (children) => renderToString(<>{children}</>);

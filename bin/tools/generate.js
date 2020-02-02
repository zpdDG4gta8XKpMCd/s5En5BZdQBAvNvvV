"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("react-dom/server");
const page_1 = require("../selling/page");
const root_1 = require("../selling/root");
const rendered = server_1.default.renderToString(React.createElement(page_1.Html, null,
    React.createElement(root_1.Root, null)));
console.log(rendered);

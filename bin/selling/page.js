"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Html extends React.Component {
    render() {
        return React.createElement("html", null,
            React.createElement("head", null,
                React.createElement("link", { rel: "stylesheet", type: "text/css", href: "./styles/all.css" })),
            React.createElement("body", null,
                React.createElement("div", { id: "root" }, this.props.children),
                React.createElement("script", { src: "./require-config.js" }),
                React.createElement("script", { src: "./node_modules/requirejs/require.js", "data-main": "printies/root" })));
    }
}
exports.Html = Html;

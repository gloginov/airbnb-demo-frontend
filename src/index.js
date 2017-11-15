import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import normalize from "normalize.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "flexboxgrid2";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

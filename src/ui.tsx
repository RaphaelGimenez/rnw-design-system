import * as React from "react";
import "react-figma/rpc";
import { render } from "react-figma";
import App from "./App";

render(<App />);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}

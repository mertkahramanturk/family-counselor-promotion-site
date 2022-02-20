import React from "react";
import ReactDOM from "react-dom";
import './translations';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'

const app = (
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();

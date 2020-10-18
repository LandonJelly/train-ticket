import React, { Component } from "react";
// import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css';
// import 'postcss-normalize' normalize 
import { Provider } from "react-redux";   
import store from "./store";

import "./index.css";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

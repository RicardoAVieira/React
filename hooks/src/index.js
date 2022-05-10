import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

import App from "./views/App";

import DataContext, { data } from "./data/DataContext";

ReactDOM.render(
	/* Esse Componente emvolve todos os outros componentes presentes em app e fornece a todos
    o componente data, este componente contem um texto e um numero */

	<App />,
	document.getElementById("root")
);

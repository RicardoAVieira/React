import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculadora from "./main/Calculator";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<div>
    <h1>Calculadora React</h1>
		<Calculadora />
	</div>,

	document.getElementById("root")
);

reportWebVitals();

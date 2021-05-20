import React from "react";

export default (props) => {
	return (
		<div>
			<button onClick={props.soma}>+</button>
			<button onClick={props.subtracao}>-</button>
			<button onClick={props.multiplicacao}>*</button>
			<button onClick={props.divisao}>/</button>
		</div>
	);
};

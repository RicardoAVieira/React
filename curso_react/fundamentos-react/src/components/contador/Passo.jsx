import React from "react";

export default (props) => {
	return (
		<div>
			<label htmlFor="passoInput">Passo:</label>
			<input
				id="passoInput"
				type="number"
				value={props.numero2}
				onChange={(e) => props.setPasso(+e.target.value)}
			/>
		</div>
	);
};

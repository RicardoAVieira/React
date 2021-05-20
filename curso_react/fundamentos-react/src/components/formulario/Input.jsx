import React, { useState } from "react";
import "./Input.css";

export default (props) => {
	const [valor, setValor] = useState("Inicial");
	function quandoMudar(e) {
		setValor(e.target.value);
	}
	//readOnli : diz repeito ao input não ter a atualização
	//de estado definida, por issomarcamos como somente leitura

	//undefined para dizer que ele é um componente não controlado

	return (
		<div className="Input">
			<h2>{valor}</h2>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<input value={valor} onChange={quandoMudar} />
				<input value={valor} readOnly />
				<input value={undefined} />
			</div>
		</div>
	);
};

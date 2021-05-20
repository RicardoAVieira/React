import React from "react";

export default (props) => {
	const cb = props.quandoClicar;
	const min = 45;
	const max = 55;
	const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
	const gerarNerd = () => Math.random() > 0.5;
	//poderia ser resumido em uma Arrow e  trocar
	//o 'e' por '_' pra sinalizar que não vou utilizar ele

	return (
		<div>
			<div>Filho</div>
			<button
				onClick={function (e) {
					cb("Dervaldo", gerarIdade(), gerarNerd());
				}}
			>
				Fornecer Informações
			</button>
		</div>
	);
};

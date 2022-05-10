import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {
	const { state, setState } =
		useContext(
			DataContext
		); /* Criação de um contexto a partir da importação do DataContext */

	function addNumber(delta) {
		setState({
			/* Desta forma, carregamos o objeto com o Spread, e então substitui apenas o number,
			se este passo não for implementado, ao alterar o number, na verdade ele sobreescreve todo o resto. */
			...state,
			number: state.number + delta,
		});
	}

	return (
		<div className="UseContext">
			<PageTitle
				title="Hook UseContext"
				subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
			/>
			<SectionTitle title="Exercício #01" />
			<div className="center">
				<span className="text">{state.text}</span>
				<span className="text">{state.number}</span>
				<div>
					<button className="btn" onClick={() => addNumber(-1)}>
						-1
					</button>
					<button className="btn" onClick={() => addNumber(+1)}>
						+1
					</button>
				</div>
			</div>
		</div>
	);
};

export default UseContext;

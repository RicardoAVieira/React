import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {
	const context =
		useContext(
			DataContext
		); /* Criação de um contexto a partir da importação do DataContext */

	return (
		<div className="UseContext">
			<PageTitle
				title="Hook UseContext"
				subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
			/>
            <div className="center">
                <span>Teste</span>
                <span className="text">{context.text}</span>
                <span className="text">{context.number}</span>
            </div>
		</div>
	);
};

export default UseContext;

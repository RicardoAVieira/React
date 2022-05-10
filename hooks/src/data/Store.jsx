import React, {useState} from "react";

const initialState = {
	number: 1234,
	text: "Context API + Hooks",
};

export const AppContext = React.createContext(initialState);

const Store = (props) => {
	const [state, setState] = useState(initialState);

	function updateState(key, value) {
		setState({
			...state,
			[key]: value,
		});
	}

	return (
		<AppContext.Provider
			value={{
                /* Neste Exemplo, foi criada uma forma de passar apenas os itens do contexto e as ferramentas
                para manipular estes itens que não existem problemas em ser compartilhados, como por exemplo,
                o setNumber e o setText.
                
                Este cuidado com o que é compartilhado ajuda a impedir que um outro desenvolvedor por exemplo,
                utilize e modigique de forma indevida informações contidas no context da aplicação inteira.
                */
				number: state.number,
				text: state.text,
				setNumber: (n) => updateState("number", n),
				setText: (t) => updateState("text", t),
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default Store;

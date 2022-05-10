import React from "react";
import { useReducer,useEffect } from "react";

import PageTitle from "../../components/layout/PageTitle";

const inicialState = {
	cart: [],
	products: [],
	user: null,
	//foco no number....
	number: 0,
    
};

function reducer(state, action) {
	switch (action.type) {
		case "add2ToNumber":
			return { ...state, number: state.number + 2 };
		case "add7ToNumber":
			return { ...state, number: state.number * 7 };
		case "dividePor25":
			return { ...state, number: state.number / 25 };
		case "toInt":
			return { ...state, number: parseInt(state.number) };
		case "numberAddN":
			return { ...state, number: state.number + action.payloadN };
		case "login":
			return { ...state, user: { name: action.payload } };
		default:
			return state;
	}
}

const UseReducer = (props) => {
	const [state, dispatch] = useReducer(reducer, inicialState);



    /* uma que faz um parse e faz o numero para inteiro, adicionar um numero n */

	return (
		<div className="UseReducer">
			<PageTitle
				title="Hook UseReducer"
				subtitle="Uma outra forma de ter estado em componentes"
			/>

			<div className="center">
				{state.user ? (
					<span className="text">{state.user.name}</span>
				) : (
					<span className="text">Sem Usuario</span>
				)}
				<span className="text">{state.number}</span>
				<div>
					<button
						className="btn"
						onClick={() => dispatch({ type: "login", payload: "Maria" })}
					>
						Login
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: "add2ToNumber" })}
					>
						+2
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: "add7ToNumber" })}
					>
						*7
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: "dividePor25" })}
					>
						n/25
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: "toInt" })}
					>
						toInt
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: "numberAddN", payloadN: -7 })}
					>
						CalcN
					</button>
                    
				</div>
			</div>
		</div>
	);
};

export default UseReducer;

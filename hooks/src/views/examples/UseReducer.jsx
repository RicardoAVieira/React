import React from "react";
import { useReducer } from "react";
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
		case "login":
			return { ...state, user: { name: action.payload } };
		default:
			return state;
	}
}

const UseReducer = (props) => {
	const [state, dispatch] = useReducer(reducer, inicialState);

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
				</div>
			</div>
		</div>
	);
};

export default UseReducer;

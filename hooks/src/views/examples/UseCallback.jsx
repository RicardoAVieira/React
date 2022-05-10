import React, { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
	const [count, setCount] = useState(0);

	/* Neste exemplo, foi criada uma função  que nada mais era do que um contador, 
	Neste caso, o use Callback, permite a criação de um cache da função, isso permite
	que a função não precise ser carregada a cada nova execução.
	
	Esta implementação depende de uma outra parte que esta no componente UseCallbackButtons,
	nesta parte é retornado um React.Memo()e o componente dos botõpes dentro dos parenteses.
	*/

	const inc = useCallback(
		function (delta) {
			setCount((curr) => count + delta);
		},
		[setCount]
	);
	return (
		<div className="UseCallback">
			<PageTitle
				title="Hook UseCallback"
				subtitle="Retorna uma função memoizada!"
			/>

			<div className="center">
				<span className="text">{count}</span>
				<UseCallbackButtons inc={inc} />
			</div>
		</div>
	);
};

export default UseCallback;

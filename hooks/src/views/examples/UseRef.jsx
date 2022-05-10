import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

/* Minha Solução */
function merge(text1, text2) {
	const resultado = [];
    let total;

	if (text1.length > text2.length) {
		total = text1.length;
	} else {
		total = text2.length;
	}

	for (var i = 0; i < total; i++) {
		if (text1[i]) {
			resultado.push(text1[i]);
		}
		if (text2[i]) {
			resultado.push(text2[i]);
		}
	}

	return resultado;
}

const UseRef = (props) => {
	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");

	const count = useRef(0);
	const myInput1 = useRef(null);
	const myInput2 = useRef(null);

	useEffect(
		function () {
			count.current++;
			myInput2.current.focus();
		},
		[value1]
	);
	useEffect(
		function () {
			count.current++;
			myInput1.current.focus();
		},
		[value2]
	);
	return (
		<div className="UseRef">
			<PageTitle
				title="Hook UseRef"
				subtitle="Retorna um Objeto mutável com a propriedade."
			/>
			<SectionTitle title="Exercício #01" />
			<div className="center">
				<div>
					<span className="text">Valor: </span>
					<span className="text">{merge(value1, value2)} [</span>
					<span className="text red">{count.current}</span>
					<span className="text">]</span>
				</div>
				<input
					type="text"
					className="input"
					value={value1}
					ref={myInput1}
					onChange={(e) => setValue1(e.target.value)}
				/>
			</div>

			<SectionTitle title="Exercício #02" />
			<div className="center">
				<input
					type="text"
					className="input"
					value={value2}
					ref={myInput2}
					onChange={(e) => setValue2(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default UseRef;

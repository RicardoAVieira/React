import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcularFatorial(num) {
	const n = parseInt(num);
	if (n < 0) return -1;
	if (n === 0) return 1;
	return calcularFatorial(n - 1) * n;
}

const UseEffect = (props) => {
	const [number, setNumber] = useState(1);
	const [fatorial, setFatorial] = useState(1);

	/* UseEffect funciona como se fosse um gatilho, sempre que uma determinada ação ocorrer ele chama a função descrita */

	useEffect(
		function () {
			setFatorial(calcularFatorial(number));
		},
		[number]
	);

	useEffect(
		function () {
			if (fatorial > 1000000) {
				document.title = "Eitaaaa !";
			}
		},
		[fatorial]
	);
	/* 	
Minha Resosulçao para o desafio
useEffect(
		function () {
			number % 2 == 0
				? (document.getElementById("parImpar").innerHTML = "Par")
				: (document.getElementById("parImpar").innerHTML = "Impar");
		},
		[number]
	);

 */

	//Resolução do professor para o desafio
	const [status, setStatus] = useState("Impar");
	useEffect(
		function () {
			setStatus(number % 2 === 0 ? "Par" : "Ímpar");
		},
		[number]
	); //Sem definir um item dentro do array de chamadas ele vai executar a cada novo status, causando uso desnecessário.

	/* 
		Imformação IMPORTANTE
		Não adicionar um setAlguma coisa no corpo, pois pode desencadear um loop
	*/
	return (
		<div className="UseEffect">
			<PageTitle
				title="Hook UseEffect"
				subtitle="Permite executar efeitos colaterais em componentes funcionais!"
			/>
			<SectionTitle title="Exercício #01" />
			<div className="center">
				<div>
					<span className="text">Fatorial:</span>
					<span className="text red">
						{fatorial === -1 ? "Não Existe" : fatorial}
					</span>
				</div>
				<input
					type="number"
					className="input"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				/>
			</div>

			<SectionTitle title="Exercício #02" />
			<div className="center">
				<div>
					{/* Resolução do professor */}
					<div className="text">
						<span> O numero é: </span>
						<span className="red">{status}</span>
					</div>
					{/* Minha Resolução do defafio
						<span className="red">
							<h1 id="parImpar"></h1> 
						</span>
					*/}
				</div>
			</div>
		</div>
	);
};

export default UseEffect;

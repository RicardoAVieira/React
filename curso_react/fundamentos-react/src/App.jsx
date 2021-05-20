import "./App.css";
import Card from "./components/layout/Card";

import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import Aleatorio from "./components/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from"./components/formulario/Input"
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

//poderia utilizar props para passar parametros ao inves do underline
export default (_) => (
	<div className="App">
		<h1>Fundamentos React</h1>

		<div className="Cards">
			<Card titulo="#14 - Mega Sena" color="#be1558">
				<Mega></Mega>
				
			</Card>
			<Card titulo="#13 - Contador" color="#be1558">
				<Contador numeroInicial={10}></Contador>
				
			</Card>
			<Card titulo="#12 - Input Controlado" color="#be1558">
				<Input></Input>
				
			</Card>
			<Card titulo="#11 - Comunicação Indireta" color="#be1558">
				<IndiretaPai></IndiretaPai>
				
			</Card>
			<Card titulo="#10 - Comunicação direta" color="#be1558">
				<DiretaPai></DiretaPai>
				
			</Card>
			<Card titulo="#09 - Usuário Info" color="#be1558">
				Este Exemplo está com erro!
				<UsuarioInfo usuario={{nome: 'Fernando'}}/>
				
			</Card>
			<Card titulo="#08 - Par ou Impar" color="#be1558">
				<ParOuImpar numero={20}></ParOuImpar>
			</Card>
			<Card titulo="#07 - Repetição Produtos" color="#be1558">
				<TabelaProdutos></TabelaProdutos>
			</Card>
			<Card titulo="#06 - Repetição Alunos" color="#be1558">
				<ListaAlunos></ListaAlunos>
			</Card>
			<Card titulo="#05 - Componente Com Filhos" color="#be1558">
				<Familia sobrenome="Antunes Vieira">
					<FamiliaMembro nome="Ricardo"></FamiliaMembro>
					<FamiliaMembro nome="Marciele"></FamiliaMembro>
					<FamiliaMembro nome="Amora"></FamiliaMembro>
				</Familia>
			</Card>
			<Card titulo="#04 - Desafio Aleatorio" color="#be1558">
				<Aleatorio min={1} max={60} />
			</Card>
			<Card titulo="#03 - Fragmento" color="#be1558">
				<Fragmento />
			</Card>
			<Card titulo="#02 - Com Parametro" color="#be1558">
				<ComParametro
					titulo="Situação do Aluno"
					aluno="Ricardo Antunes Vieira"
					nota={10}
				/>
			</Card>
			<Card titulo="#01 - Primeiro" color="#be1558">
				<Primeiro />
			</Card>
		</div>
	</div>
);

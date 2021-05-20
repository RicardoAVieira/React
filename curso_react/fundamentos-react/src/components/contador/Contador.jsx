import React, { Component } from "react";
import "./Contador.css";
import Botoes from "./Botoes";
import Display from "./Display";
import Passo from "./Passo";

class Contador extends Component {
	state = {
		numero: this.props.numeroInicial || 0,
		numero2: this.props.numero2Inicial || 0,
		passo: this.props.passoInicial || 5,
	};

	sum = () => {
		this.setState({
			numero: this.state.numero + this.state.numero2,
		});
	};

	setPasso = (novoPasso) => {
		this.setState({
			numero2: novoPasso,
		});
	};

	sub = () => {
		this.setState({
			numero: this.state.numero - this.state.numero2,
		});
	};
	mult = () => {
		this.setState({
			numero: this.state.numero * this.state.numero2,
		});
	};
	div = () => {
		this.setState({
			numero: this.state.numero / this.state.numero2,
		});
	};

	render() {
		return (
			<div className="Contador">
				Contador: <Display numero={this.state.numero}></Display>
				<Passo
					passo={this.state.passo}
					numero2={this.state.numero2}
					setPasso={this.setPasso}
				/>
				<Botoes
					soma={this.sum}
					subtracao={this.sub}
					multiplicacao={this.mult}
					divisao={this.div}
				/>
			</div>
		);
	}
}
export default Contador;

import React from "react";
import './TabelaProdutos.css'
import produtos from "../../data/produtos";
export default (props) => {

    function getLinhas(){
        return produtos.map((produtos,i) => {
            return (
                <tr key={produtos.id} className={i%2===0? 'Par':'Impar'}>
                    <td>{produtos.id}</td>
                    <td>{produtos.nome}</td>
                    <td>R$: {produtos.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }

	

	return (
		<div className="TabelaProdutos">
			<table>
                <thead>

				<tr>
					<th>Codigo</th>
					<th>Nome Produto</th>
					<th>Preço Produto</th>
				</tr>
                </thead>
                <tbody>

				{getLinhas()}
                </tbody>
			</table>
		</div>
	);
};

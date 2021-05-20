import React from 'react'

export default function Aleatorio(props) {

    const { min, max } = props;

    const res = parseInt(Math.random() * (max - min) + min);
    return (
        <div>
            <h2>Retorno de numero aleatório</h2>
            <p>Valor minimo: <strong>{min}</strong></p>
            <p>Valor Maximo: <strong>{max}</strong></p>

            <p>O numero aleatório é: <strong>{res}</strong></p>
        </div>
    )
}
import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props =>{

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
  

    //nome idade nerd :pai
    function fornecerInformações(nome, idade, nerdP){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'é Nerd' : 'não é Nerd'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformações}></IndiretaFilho>
        </div>
    )
}
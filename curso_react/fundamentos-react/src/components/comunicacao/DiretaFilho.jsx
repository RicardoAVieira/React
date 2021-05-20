import React from "react";

export default (props) => {
	return(
        
    <div>
        <span>{props.nome} - </span>
        <span>{props.idade} anos </span>
        <span>e{props.nerd ? ' é Nerd' : ' não é Nerd'} !</span>
    </div>
    ) 
};

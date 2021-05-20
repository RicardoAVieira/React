import React from "react";
import DiretaFilho from './DiretaFilho'

export default (props) => {
	return(
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={false}></DiretaFilho>
            <DiretaFilho nome="Pedro" idade={25} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Luana" idade={23} nerd={true}></DiretaFilho>
        </div>
    ) 
};
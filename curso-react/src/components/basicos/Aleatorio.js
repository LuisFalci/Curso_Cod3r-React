import React from 'react'


export default function Aleatorio(props){

    let { min, max } = props
    
    function ramdom(){
        //pega um valor aleatório entre o mínimo e o máximo passados
        let aleatorio = Math.floor(Math.random() * (props.max - props.min + 1) ) + props.min
        return aleatorio
    }

    return(
        <div>
            {ramdom()}
        </div>
    )
}
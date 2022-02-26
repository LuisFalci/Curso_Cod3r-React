import React from 'react'


export default function Aleatorio(props){

    function ramdom(){
        let aleatorio = Math.floor(Math.random() * (props.max - props.min + 1) ) + props.min
        return aleatorio
    }

    return(
        <div>
            
            <p id="ramdom">{ramdom()}</p>
        </div>
    )
}
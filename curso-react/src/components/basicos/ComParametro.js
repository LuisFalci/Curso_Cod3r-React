import React from 'react'

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação' //se nota maior ou igual a 7 retorna aprovado
    return(
        <div>
            <p>{props.cor}</p> 
            <p>{props.texto}</p>
            <p>{props.nota}</p>
            <p>Status: {status}</p>
        </div>
    )
}
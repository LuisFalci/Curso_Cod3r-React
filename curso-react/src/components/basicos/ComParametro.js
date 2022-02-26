import React from 'react'

export default function ComParametro(props){
    //se nota maior ou igual a 7 retorna aprovado
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação' 

    //parâmetros não podem ser alterados (apenas leitura), mas podemos atribuíl-los a outras varíaveis e assim muda-los 
    const notaInt = Math.ceil(props.nota)
    return(
        <div>
            <p>{props.cor}</p> 
            <p>{props.texto}</p>
            <p>{notaInt}</p>
            <p>Status: {status}</p>
        </div>
    )
}
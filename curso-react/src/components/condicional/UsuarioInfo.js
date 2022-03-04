import React from 'react'
import If, { Else } from './If'

export default function UsuarioInfo(props){
    //pega o usuario e caso não exista, ele é vazio
    const usuario = props.usuario || {}
    return(
        <div>
            {/* If é pai de Else */}
           <If test={usuario && usuario.nome}>
           Seja bem vindo <strong> { usuario.nome}</strong>
           <Else>
               Seja bem vindo <strong>Amigão</strong>
           </Else>
           </If>
        </div>
    )
}
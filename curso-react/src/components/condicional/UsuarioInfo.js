import React from 'react'
import If from './If'

export default function UsuarioInfo(props){
    //pega o usuario e caso não exista, ele é vazio
    const usuario = props.usuario || {}
    return(
        <div>
           <If test={usuario && usuario.nome}>
           Seja bem vindo <strong> { usuario.nome}</strong>
           </If>
        </div>
    )
}
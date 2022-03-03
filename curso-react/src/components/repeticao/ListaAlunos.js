import React from "react";
import alunos from '../../data/alunos'

export default function ListaAlunos(props){
    
    //mapeia o objeto alunos
    const listaAlunos = alunos.map((aluno) => {
        return(
            // usamos o id como chave para facilitar a localização do código para o React
            <li key={aluno.id}>
                {aluno.id} {aluno.nome} -> {aluno.nota}
            </li>
        )
    })

    return(
        <div>
            <ul style={{ listStyle:'none'}}>
               {listaAlunos}
            </ul>
        </div>
    )
}
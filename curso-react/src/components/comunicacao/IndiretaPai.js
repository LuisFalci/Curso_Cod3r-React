import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

//atributos do pai: nome / idade / nerd

export default function IndiretaPai(props) {

    // let nome = '?'
    // let idade = 0
    // let nerd = false

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
  return (
    <div>
        <div>
            <span>{nome} </span>
            <span><strong>{idade} </strong> </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
        </div>
        {/* por meio de função, o pai consegue receber os dados do filho */}
        <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
}

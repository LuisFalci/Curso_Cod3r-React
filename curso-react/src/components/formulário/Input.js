import "./Input.css"
import React, {useState} from 'react'

export default function Input(props){
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }
    return (
        <div className='Input'>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

            {/* Componentes com uso de estado são controláveis (MELHOR OPÇÃO) */}
           <input value={valor} onChange={quandoMudar} /> 
           {/*Quando não usamos o onChange, o console avisa erro. Tratar com readOnly nesse caso  */}
           <input value={valor} readOnly /> 
           {/* exemplo de componente não controlado: */}
           <input value={undefined}></input>
           </div>
        </div>
    )
}
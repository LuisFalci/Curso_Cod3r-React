import React from 'react'
import './index.css' //importando css
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'


//export default (props) => {

export default function App(props) {
    return(
        <div id="app">
            <h1>Fundamentos React</h1>
            <Aleatorio max={10} min={1} />
            <Primeiro />
            <ComParametro
            cor="color:Tomato;"
            texto="texto aq"
            nota={10.0}/>
        </div>
    )
}
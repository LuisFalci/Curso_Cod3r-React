import ReactDOM from 'react-dom'
import React from 'react'
import './index.css' //importando css
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
<div>
    <Primeiro></Primeiro>
    <ComParametro
     cor="color:Tomato;"
     texto="texto aq"
     nota={10.0}/>
</div>, document.getElementById('root'))
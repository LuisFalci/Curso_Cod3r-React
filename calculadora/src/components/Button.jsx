import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return(
        // o botão aplica a className que a ele for passada
        // ao clicarmos no botão, será gerado um evento (e) que com a arrowFunction (=>) irá receber o evento click() com o parâmetro da label do botão 
        <button 
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
        {props.label}
    </button>
)
}
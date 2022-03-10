import React, { useState } from 'react'

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = props => {
    const [state, setState] = useState(initialState)

    // updateState apresenta 2 valores, o valor e a chave para esse valor. O ...state importa todo o objeto anterior (com exceção de)
    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    // Como Store está envolvendo todos os componentes de App, usamos o {props.children} para renderizar todos os filhos de Store
    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store
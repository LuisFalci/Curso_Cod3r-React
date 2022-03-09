import React from 'react'

export const data = {
    number: 123,
    text: 'Context API...'
}

// criamos um objeto de contexto e o exportamos

const DataContext = React.createContext(data)

export default DataContext
import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'

const Content = props => (
    <main className="Content">
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          {/* 2 pontos significa que a url espera algum parâmetro, neste caso o id*/}
          <Route path="/param/:id" element={<Param />} />
          {/* qualquer outra url não atendida, irá cair aqui (*) */}
          <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
)

export default Content
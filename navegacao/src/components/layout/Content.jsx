import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'

const Content = props => (
    <main className="Content">
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          {/* 2 pontos significa que a url espera algum parâmetro, neste caso o id*/}
          <Route path="/param/:id" element={<Param />} />
      </Routes>
    </main>
)

export default Content
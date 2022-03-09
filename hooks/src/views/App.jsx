import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import DataContext, { data } from "../data/DataContext";

const App = (props) => {
  const [state, setState] = useState(data);

  // Importamos o objeto de contexto (com os dados) e envolvemos os elementos de App (toda nossa aplicação) dentro dele. Assim, os componentes de App terão acesso a todos os dados. Em value, passamos o state e o setState, assim, todos os componentes conseguem alterar o estado 
  return (
    <DataContext.Provider value={{state, setState}}>
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </DataContext.Provider>
  );
};

export default App;

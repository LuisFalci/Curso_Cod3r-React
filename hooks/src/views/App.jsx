import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import DataContext, { data } from "../data/DataContext";
import Store from "../data/Store";

const App = (props) => {
  // usamo useState passando o objeto data
  const [state, setState] = useState(data);

  // Store: assim como o DataContext.Provider, nós conseguimos passar todos os dados de store para o resto de nossa aplicação (ao envolver toda ela com Store), porém, a diferença está em que não passamos o setState. Dentro do componente Store, nós não passamos o setState, passamos alguns elementos que não podem ser mudados e alguns que podem apenas. 

  // DataContext.Provider: Importamos o objeto de contexto (com os dados) e envolvemos os elementos de App (toda nossa aplicação) dentro dele. Assim, os componentes de App terão acesso a todos os dados. Em value, passamos o state e o setState, assim, todos os componentes conseguem alterar o estado 
  return (
    <Store>
        <DataContext.Provider value={{state, setState}}>
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </DataContext.Provider>
    </Store>
  );
};

export default App;

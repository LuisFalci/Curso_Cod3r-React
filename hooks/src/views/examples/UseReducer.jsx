import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: [],
  //campo que iremos trabalhar
  number: 0,
};

// função reducer recebe 2 parâmetros: o estado atual (state) e uma action
// a partir da ação, a função sabe o que fazer com o state (o switch faz a decisão)
function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "numberMult7":
      return { ...state, number: state.number * 7 };
    case "numberDiv25":
      return { ...state, number: state.number / 25 };
    case "numberParseInt":
      return { ...state, number: parseInt(state.number) };
    case "number_addn":
      return { ...state, number: state.number + action.payload };

    default:
      return state;
  }
}
const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Maria" })}
          >
            Login
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAdd2" })}
          >
            +2
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "numberMult7" })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberDiv25" })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberParseInt" })}
          >
            INT
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_addn" , payload: 10})}
          >
            +n
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;

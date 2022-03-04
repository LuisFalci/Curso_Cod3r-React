import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default function TabelaProdutos(props) {
  const tabelProduto = produtos.map((produto, i) => {
    return (
        //testa se é par, se for muda o className para Par
      <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
          {/* "==" compara o valor, já "===" compara o valor e o tipo (string, int...)  */}
        <td>{produto.id}</td>
        <td>{produto.nome}</td> 
        {/* toFixed fixa o número de casas decimais depois da vírgula */}
        <td>R$ {produto.preco.replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
        {tabelProduto}

        </tbody>
      </table>
    </div>
  );
}

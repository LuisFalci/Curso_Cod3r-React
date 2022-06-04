import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="#bbb" />
      <Navegador texto="JSX" destino="/jsx" cor="red" />
      <Navegador texto="Navegação Dinâmica #01" destino="/cliente/sp_2/123 " cor="red" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="pink" />
      <Navegador texto="Integração 1" destino="/integracao_1" cor="grey" />
      <Navegador texto="Estático" destino="/estatico" cor="blue" />
      
    </div>
  );
}

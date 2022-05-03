export default function Cabecalho(props){
    // props é somente para leitura
    return(
        <header>
            <h1>Fundamentos Next</h1>
            <h2>{props.titulo}</h2>
            <h2>{props.idade}</h2>
        </header>
    )
}
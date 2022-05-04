import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo(){
    return(
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="luis" idade={23}/>
            <Cabecalho />
        </Layout>
    )
}
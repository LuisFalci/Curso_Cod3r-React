import styles from "../styles/Estiloso.module.css";
import Layout from "../components/Layout";

export default function Estiloso() {
  return (
    <Layout titulo="Exemplo de css modularizado">
      <div className={styles.roxo}>
        <h1>Estilo Aqui</h1>
      </div>
    </Layout>
  );
}

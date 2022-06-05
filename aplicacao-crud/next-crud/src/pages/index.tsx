import Head from 'next/head'
import Image from 'next/image'
import Botao from '../components/Botao'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import styles from '../styles/Home.module.css'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 32, '1'),
    new Cliente('Bena', 12, '2'),
    new Cliente('Guina', 52, '3'),
    new Cliente('Jana', 21, '4')
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  return (
    <div className={
      `flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white`
    }>
     <Layout titulo="Cadastro Simples">
       <div className='flex justify-end'>
       <Botao cor="blue" className="mb-4">Novo Cliente</Botao>
       </div>
       <Tabela clientes={clientes}
       clienteSelecionado={clienteSelecionado}
       clienteExcluido={clienteExcluido}></Tabela>
     </Layout>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
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

  return (
    <div className={
      `flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white`
    }>
     <Layout titulo="Cadastro Simples">
       <Tabela clientes={clientes}></Tabela>
     </Layout>
    </div>
  )
}

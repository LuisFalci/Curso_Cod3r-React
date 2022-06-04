import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={
      `flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500`
    }>
     <h1>Olá Mundo</h1>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from './components/landing'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iris</title>
        <meta name="description" content="decentralised way of sending messages" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <Landing/>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

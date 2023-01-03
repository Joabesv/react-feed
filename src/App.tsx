import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
    
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* Aqui ficaram os posts do feed */}
          <h1>Joabesv - polemicas</h1>
          <p>Meu Deus que polemico</p>

          <h1>Joabesv - polemicas</h1>
          <p>Meu Deus que polemico</p>
        </main>
      </div>
    </>
  )
}

export default App

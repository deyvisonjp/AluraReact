import { useState } from 'react';
import { Buscador } from './Buscador'
import styles from './Cardapio.module.scss'

import {ReactComponent as Logo} from 'assets/logo.svg'
import { Filtros } from 'pages/Filtros';

export default function Cardapio() {

  const [busca, setBusca] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Novo
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador 
          busca={busca}
          setBusca={setBusca}
        />
        <div className={styles.cardapio__filtros}>
          <Filtros />
        </div>
      </section>
    </main>
  )
}
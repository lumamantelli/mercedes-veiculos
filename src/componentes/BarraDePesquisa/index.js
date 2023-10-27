import React from 'react'
import styles from './BarraDePesquisa.module.css'

function BarraDePesquisa({ valorFiltro, setValorFiltro }) {
    const valorDaBusca = valorFiltro
    const setValorDaBusca = setValorFiltro
 

    return(
        <section className={styles.barra_container}>
            <div className={styles.barra_de_pesquisa}>
                <input className={styles.barra_input}
                    onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} 
                    placeholder='Qual carro você procura?'/>
                <button type='submit' data-botao-pesquisa>
                    <img className={styles.lupa_pesquisar}  src='/imagens/lupa.svg' alt='Lupa Pesquisar'/>
                </button>
            </div>
        </section>
    )
}

export default BarraDePesquisa
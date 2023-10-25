import styles from './BarraDePesquisa.module.css'

function BarraDePesquisa() {
    return(
        <section className={styles.barra_container}>
            <div className={styles.barra_de_pesquisa}>
                <input className={styles.barra_input} placeholder='Qual carro você procura?'/>
                <button type='submit'>
                    <img className={styles.lupa_pesquisar}  src='/imagens/lupa.svg' alt='Lupa Pesquisar'/>
                </button>
            </div>
        </section>
    )
}

export default BarraDePesquisa
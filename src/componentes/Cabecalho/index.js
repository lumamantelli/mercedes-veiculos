import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import CabecalhoLink from '../CabecalhoLink'



function Cabecalho() {

    return (
        <header className={styles.cabecalho}>
      
                <Link to='/'>
                    <img className={styles.logo} src='/imagens/logo.svg' alt='Logo Mercedes Veiculos'/>
                </Link>
                <nav className={styles.nav}>
                    <CabecalhoLink url='/'>
                        Início
                    </CabecalhoLink>
                    <CabecalhoLink url='/Contato'>
                        Contato
                    </CabecalhoLink>
                </nav>
                
        </header>
    )
}

export default Cabecalho
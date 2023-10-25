import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import CabecalhoLink from '../CabecalhoLink'
import { menuSuspenso } from 'componentes/MenuSuspenso'



function Cabecalho() {

    return (
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img className={styles.logo} src='/imagens/logo.svg' alt='Logo Mercedes Veiculos'/>
            </Link>
            <nav className={styles.nav}>
                <CabecalhoLink url='./'>
                    Início
                </CabecalhoLink>
                <CabecalhoLink url='./Contato'>
                    Contato
                </CabecalhoLink>
            </nav>
            <div className={styles.menu}>
            <button type='button'>
                <img 
                onClick={() => {
                    menuSuspenso.classList.add("active") 
                }}
                 className={styles.img_tres_linhas} src='/imagens/tres-linhas.svg' alt='Tres linhas'/>
            </button>


                    {/* <div className={styles.menu_suspenso} data-menu>
                <div className={styles.menu_suspenso_container}>
                    <div className={styles.menu_cabecalho}>
                        <button className={styles.btn_fechar_menu}>
                            <img className={styles.x_fechar} src='/imagens/x.svg' alt='X fechar'/>
                        </button>
                        <img className={styles.logo_menu} src='/imagens/logo.svg' alt='Logo Mercedes Veículos'/>
                    </div>
                    <div className={styles.menu_suspenso_link}>
                        <MenuSuspensoLink>
                            <img className={styles.icone} src='/imagens/home.svg' alt='Icone Home'/>
                            Home
                        </MenuSuspensoLink>
                        <MenuSuspensoLink>
                            <img className={styles.icone} src='/imagens/phone.svg' alt='Icone Phone'/>
                            Contato
                        </MenuSuspensoLink>
                        <MenuSuspensoLink>
                            <img className={styles.icone} src='/imagens/fi.svg' alt='Icone FIPE'/>
                            Tabela FIPE
                        </MenuSuspensoLink>
                        <MenuSuspensoLink>
                            <img className={styles.icone} src='/imagens/sell.svg' alt='Icone Sell'/>
                            Vender meu carro
                        </MenuSuspensoLink>
                        <MenuSuspensoLink>
                            <img className={styles.icone} src='/imagens/payment.svg' alt='Icone Payment'/>
                            Meios de pagamento
                        </MenuSuspensoLink>
                    </div>
                    
                    <div className={styles.menu_suspenso_link}>
                        <p className={styles.titulo_redes_menu}>Nossas redes sociais</p>
                        <MenuSuspensoLink>
                            <img className={styles.icone} src='/imagens/instagram.svg' alt='Icone Instagram'/>
                            Instagram
                        </MenuSuspensoLink>
                        <MenuSuspensoLink>
                            <img className={styles.icone} src='/imagens/whatsapp-cinza.svg' alt='Icone Whatsapp'/>
                            Whatsapp
                        </MenuSuspensoLink>
                    </div>

                    <div className={styles.menu_rodape}>
                        <img className={styles.copy} src='/imagens/copyright.svg' alt='Copyright'/>
                        <p>2023 - Luma Mantelli</p>
                    </div>
                </div>
            </div> */}

                
            </div>
        </header>
    )
}

export default Cabecalho
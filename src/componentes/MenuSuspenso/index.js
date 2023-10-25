import MenuSuspensoLink from 'componentes/MenuSuspensoLink'
import styles from './MenuSuspenso.module.css'


export let menuSuspenso = document.querySelector('[data-menu]')
console.log(menuSuspenso)

function MenuSuspenso() {
    return(
        <div className={styles.menu_suspenso} data-menu>
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
        </div>
    )
}

export default MenuSuspenso 

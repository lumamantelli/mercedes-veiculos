import styles from './Rodape.module.css'
import RodapeLink from 'componentes/RodapeLink'


function Rodape() {
    return(
        <footer className={styles.rodape}>
            <div className={styles.rodape_conteudo}>
                <img className={styles.rodape_logo} src='/imagens/logo-branco.svg' alt='Logo Mercedes Veículos'/>
                <nav className={styles.rodape_nav}>
                    <div className={styles.nav_link}>
                        <h4 className={styles.rodape_nav_titulo}>Ajuda</h4>
                        <RodapeLink>
                            Quem somos 
                        </RodapeLink>
                        <RodapeLink url="./Contato">
                            Contato
                        </RodapeLink>
                        <RodapeLink>
                            Tabela FIPE
                        </RodapeLink>
                        <RodapeLink>
                            Meios de pagamento
                        </RodapeLink>
                        <RodapeLink>
                            Vender meu carro
                        </RodapeLink>
                    </div>
                    <div className={styles.nav_link}>
                        <h4 className={styles.rodape_nav_titulo}>Institucional</h4>
                        <RodapeLink>
                            LGPD
                        </RodapeLink>
                        <RodapeLink>
                            Código de defesa do consumidor
                        </RodapeLink>
                        <RodapeLink>
                            Gerenciamento de cookies
                        </RodapeLink>
                        <RodapeLink>
                            Termos de Uso e Política de privacidade
                        </RodapeLink>
                    </div>
                </nav>
            </div>
            <div className={styles.credito_rodape}>
                <img className={styles.copy_img} src='/imagens/copyright.svg' alt='copyright'/>
                <p className={styles.credito_texto}>2023 - Luma Mantelli</p>
            </div>
        </footer>
    )
}

export default Rodape
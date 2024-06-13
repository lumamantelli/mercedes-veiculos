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
                        <RodapeLink url="/QuemSomos">
                            Quem somos 
                        </RodapeLink>
                        <RodapeLink url="/Contato">
                            Contato
                        </RodapeLink>
                        <RodapeLink>
                            Tabela FIPE
                        </RodapeLink>
                        <RodapeLink url="/Financiamento">
                            Financiamento
                        </RodapeLink>
                        <RodapeLink url="/VenderMeuVeiculo">
                            Vender meu veículo
                        </RodapeLink>
                    </div>
                    <div className={styles.nav_link}>
                        <h4 className={styles.rodape_nav_titulo}>Institucional</h4>
                        <RodapeLink url="/Lgpd">
                            LGPD
                        </RodapeLink>
                        <RodapeLink url='/Cdc'>
                            Código de defesa do consumidor
                        </RodapeLink>
                        <RodapeLink url="/Cookies">
                            Gerenciamento de cookies
                        </RodapeLink>
                        <RodapeLink url="/Politica">
                            Termos de Uso e Política de privacidade
                        </RodapeLink>
                    </div>
                </nav>
            </div>
            <div className={styles.credito_rodape}>
                <img className={styles.copy_img} src='/imagens/copyrigth.svg' alt='copyright'/>
                <p className={styles.credito_texto}>2023 - Luma Mantelli</p>
            </div>
        </footer>
    )
}

export default Rodape
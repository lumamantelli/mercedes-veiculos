import './MenuSuspenso.css'
import MenuSuspensoLink from 'componentes/MenuSuspensoLink'
import { useRef, useState } from 'react'





function MenuSuspenso() {

    const menuSuspensoRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)
   
    return(
        
        <div className="menu_suspenso" >
            <button onClick={onClick} className="btn_menu" type='button'>
                <img className="img_tres_linhas" src='/imagens/tres-linhas.svg' alt='Tres linhas'/>
            </button>
            
        <div ref={menuSuspensoRef}  className={` ${isActive ? "menu_suspenso_container" : "inativo"} `} data-menu>
                <div className="menu_cabecalho">
                    <button onClick={onClick}  className="btn_fechar_menu">
                        <img className="x_fechar" src='/imagens/x.svg' alt='X fechar'/>
                    </button>
                    <img className="logo_menu" src='/imagens/logo.svg' alt='Logo Mercedes Veículos'/>
                </div>
                <div className="menu_suspenso_link">
                    <MenuSuspensoLink url="/">
                        <img className="icone" src='/imagens/home.svg' alt='Icone Home'/>
                        Home
                    </MenuSuspensoLink>
                    <MenuSuspensoLink url="/Contato">
                        <img className="icone" src='/imagens/phone.svg' alt='Icone Phone'/>
                        Contato
                    </MenuSuspensoLink>
                    <MenuSuspensoLink>
                        <img className="icone" src='/imagens/fi.svg' alt='Icone FIPE'/>
                        Tabela FIPE
                    </MenuSuspensoLink>
                    <MenuSuspensoLink url="/VenderMeuVeiculo">
                        <img className='icone' src='/imagens/sell.svg' alt='Icone Sell'/>
                        Vender meu veículo
                    </MenuSuspensoLink>
                    <MenuSuspensoLink url="/Financiamento">
                        <img className="icone" src='/imagens/payment.svg' alt='Icone Payment'/>
                        Finaciamento
                    </MenuSuspensoLink>
                </div>
                
                <div className="menu_suspenso_link">
                    <p className="titulo_redes_menu">Nossas redes sociais</p>
                    <MenuSuspensoLink url="https://instagram.com/david.mercedessouza?igshid=MzRlODBiNWFlZA==">
                        <img className="icone" src='/imagens/instagram.svg' alt='Icone Instagram'/>
                        Instagram
                    </MenuSuspensoLink>
                    <MenuSuspensoLink url="https://wa.me/5566996231390?text=Olá, vim do catálogo">
                        <img className="icone" src='/imagens/whatsapp-cinza.svg' alt='Icone Whatsapp'/>
                        Whatsapp
                    </MenuSuspensoLink>
                </div>

                <div className="menu_rodape">
                    <img className="copy" src='/imagens/copyrigthpreto.svg' alt='Copyright'/>
                    <p className='credito_texto'>2023 - Luma Mantelli</p>
                </div>
            </div>
        </div>
    )
}

export default MenuSuspenso

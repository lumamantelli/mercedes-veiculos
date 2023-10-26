import "./Contato.css"
import Cabecalho from "componentes/Cabecalho"
import MenuSuspenso from "componentes/MenuSuspenso"
import Rodape from "componentes/Rodape"

function Contato () {
    return (
        <main>
            <MenuSuspenso/>
            <Cabecalho/>
            <section className="conteudo_contatos">
                <h3 className="titulo_contatos">Clique nos ícones para acessar nossas redes</h3>
                <div className="icones">
                    <a target="blank" href="h">
                        <img className="icone_contatos" src="/imagens/instagram.svg" alt="Logo Instagram"/>
                    </a>
                    <a target="blank" href="h">
                        <img className="icone_contatos" src="/imagens/whatsapp-cinza.svg" alt="Logo Whatsapp"/>
                    </a>
                </div>
            </section>
            <Rodape/>
        </main>
    )
}

export default Contato
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
                    <a className="link_contato" target="blank" href="https://instagram.com/david.mercedessouza?igshid=MzRlODBiNWFlZA==">
                        <img className="icone_contatos" src="/imagens/instagram-vermelho.svg" alt="Logo Instagram"/>
                        <h4>Instagram</h4>
                    </a>
            
                    <a className="link_contato" href='https://wa.me/5566996231390?text=Olá, vim do catálogo' target="blank">
                        <img className="icone_contatos" src="/imagens/whatsapp-vermelho.svg" alt="Logo Whatsapp"/>
                        <h4>Whatsapp</h4>
                    </a>
                </div>
                <form className="formulario">
                    <h3 className="form_titulo">Formulário</h3>
                    <fieldset>
                        <label>
                            Nome
                        </label>
                        <input type="text"/>
                    </fieldset>
                    <fieldset>
                        <label>
                            Whatsapp
                        </label>
                        <input type="text"/>
                    </fieldset>
                    <fieldset>
                        <label>
                            Assunto
                        </label>
                        <textarea/>
                    </fieldset>
                </form>
            </section>
            <Rodape/>
        </main>
    )
}

export default Contato
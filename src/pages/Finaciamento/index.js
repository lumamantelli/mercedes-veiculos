import Cabecalho from "componentes/Cabecalho"
import MenuSuspenso from "componentes/MenuSuspenso"
import Rodape from "componentes/Rodape"
import "./Financiamento.css"


function Financiamento() {
    return(
        <>
            <MenuSuspenso/>
            <Cabecalho/>
            <main className="conteudo">
                <div className="banner">
                    
                </div>
                <h2 className="title">Bancos Parceiros</h2>
                <aside className="bancos_parceiros">
                    <div className="icones_banco">
                        <img className="icone_banco" src="../../../imagens/icone-bv.svg" alt="Icone Banco BV"/>
                    </div>
                    <div className="icones_banco">
                        <img className="icone_banco" src="../../../imagens/icone-safra.svg" alt="Icone Banco Safra"/>
                    </div>
                    <div className="icones_banco">
                        <img className="icone_banco" src="../../../imagens/icone-santander.svg" alt="Icone Banco Santander"/>
                    </div>
                    <div className="icones_banco">
                        <img className="icone_banco" src="../../../imagens/icone-itau.svg" alt="Icone Banco Itau"/>
                    </div>
                </aside>
                <aside className="como_funciona">
                    <h2 className="title">
                        Como funciona?
                    </h2>
                    <div className="content_como_funciona">
                        <div className="conteudo_como_funciona">
                            <img className="icone_como_funciona" src="../../../imagens/whatsapp-vermelho.svg" alt="Ícone Whatsapp Vermelho"/>
                            <p className="text_conteudo_como_funciona">
                                Entre em contato pelo nosso Whatsapp e fale com o nosso vendedor.
                            </p>
                        </div>
                        <div className="conteudo_como_funciona">
                            <img className="icone_como_funciona" src="../../../imagens/icone-cashback.svg" alt="Ícone Cashback"/>
                            <p className="text_conteudo_como_funciona">
                                Forneça seus dados. Fique tranquilo, eles serão usados apenas para fazer a simulação!
                            </p>
                        </div>
                        <div className="conteudo_como_funciona">
                            <img className="icone_como_funciona" src="../../../imagens/icone-dados.svg" alt="Ícone Dados"/>
                            <p className="text_conteudo_como_funciona">
                                Escolha a melhor opção para você!
                            </p>
                        </div>
                    </div>
                    <a href="https://wa.me/5566996231390?text=Olá, quero fazer uma simulação." target="blank">
                        <button  className="button_como_funciona">
                            <img className="logo_whatsapp_button" src="../../../imagens/whatsapp-vermelho.svg" alt="Logo Whatsapp Vermelho"/>
                            Clique aqui para falar com o vendedor
                        </button>
                    </a>
                </aside>
                <div className="perguntas_frequentes">
                    <h2 className="title">
                        Perguntas frequentes
                    </h2>
                    <div class="panel-group" id="accordion">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
        Collapsible Group 1</a>
      </h4>
    </div>
    <div id="collapse1" class="collapse in">
      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
        Collapsible Group 2</a>
      </h4>
    </div>
    <div id="collapse2" class="collapse">
      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
        Collapsible Group 3</a>
      </h4>
    </div>
    <div id="collapse3" class="collapse">
      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</div>
    </div>
  </div>
</div>
                </div>
            </main>
            <Rodape/>
        </>
    )
}

export default Financiamento
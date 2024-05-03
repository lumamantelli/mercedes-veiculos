import Cabecalho from "componentes/Cabecalho"
import MenuSuspenso from "componentes/MenuSuspenso"
import Rodape from "componentes/Rodape"
import './VenderVeiculo.css'

function VenderMeuVeiculo() {
    return (
        <>
            <MenuSuspenso />
            <Cabecalho />
            <main className="conteudo">
                <h3 className="titulo">
                    Vender meu veículo
                </h3>
                <form className="formulario">
                    <fieldset>
                        <label>
                            Nome
                        </label>
                        <input className="input_form" type="text" minLength="3" />
                    </fieldset>
                    <fieldset>
                        <label>
                            Whatsapp
                        </label>
                        <input className="input_form" type="tel" minLength="11" />
                    </fieldset>
                    <div className="checkbox">
                        <label>Você é:</label>
                        <fieldset class="form-radios">
                            <input class="form-radios-input" type="radio" name="flexRadioDefault" />
                            <label class="form-radios-label" for="flexRadioDefault1">
                                Pessoa Física
                            </label>
                        </fieldset>
                        <fieldset class="form-radios">
                            <input class="form-radios-input" type="radio" name="flexRadioDefault" />
                            <label class="form-radios-label" for="flexRadioDefault2">
                                Pessoa Jurídica
                            </label>
                        </fieldset>
                    </div>
                    <fieldset>
                        <label>
                            Deixe uma mensagem
                        </label>
                        <textarea />
                    </fieldset>
                    <button className="btn_enviar_form" type="submit">
                        Enviar
                    </button>
                </form>
            </main>
            <Rodape />
        </>
    )
}

export default VenderMeuVeiculo
import React from "react"
import Cabecalho from "componentes/Cabecalho"
import MenuSuspenso from "componentes/MenuSuspenso"
import Rodape from "componentes/Rodape"
import './VenderVeiculo.css'
import Formulario from "componentes/Formulario"


function VenderMeuVeiculo() {
    return (
        <>
            <MenuSuspenso />
            <Cabecalho />
            <main className="conteudo">
                <h3 className="titulo">
                    Vender meu veículo
                </h3>
                <Formulario/>
                {/* <form action="/send_mail.php" method="post" className="formulario">
                    <fieldset>
                        <label htmlFor="name">
                            Nome
                        </label>
                        <input className="input_form" type="text" name="name" minLength="3" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="whatsapp">
                            Whatsapp
                        </label>
                        <input className="input_form" type="tel" name="whatsapp" minLength="11" />
                    </fieldset>
                    <div className="checkbox">
                        <label>Você é:</label>
                        <fieldset className="form-radios">
                            <input className="form-radios-input" type="radio" name="flexRadioDefault tipo_pessoa" />
                            <label className="form-radios-label" htmlFor="flexRadioDefault1">
                                Pessoa Física
                            </label>
                        </fieldset>
                        <fieldset className="form-radios">
                            <input className="form-radios-input" type="radio" name="flexRadioDefault tipo_pessoa" />
                            <label className="form-radios-label" htmlFor="flexRadioDefault2">
                                Pessoa Jurídica
                            </label>
                        </fieldset>
                    </div>
                    <fieldset>
                        <label htmlFor="message">
                            Deixe uma mensagem
                        </label>
                        <textarea name="message" />
                    </fieldset>
                    <button className="btn_enviar_form" type="submit">
                        Enviar
                    </button>
                </form> */}
            </main>
            <Rodape />
        </>
    )
}

export default VenderMeuVeiculo


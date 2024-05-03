import Cabecalho from "componentes/Cabecalho"
import MenuSuspenso from "componentes/MenuSuspenso"
import Rodape from "componentes/Rodape"

function MeioPagamento() {
    return(
        <>
            <MenuSuspenso/>
            <Cabecalho/>
            <main className="conteudo">
                <h3 className="titulo">
                    Meios de Pagamento
                </h3>
                <p className="texto">

                </p>
            </main>
            <Rodape/>
        </>
    )
}

export default MeioPagamento
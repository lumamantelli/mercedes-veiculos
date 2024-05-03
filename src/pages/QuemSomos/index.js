const { default: Cabecalho } = require("componentes/Cabecalho");
const { default: MenuSuspenso } = require("componentes/MenuSuspenso");
const { default: Rodape } = require("componentes/Rodape");

function QuemSomos() {
    return(
        <>
            <MenuSuspenso/>
            <Cabecalho/>
            <main className="conteudo">
            <h3 className="titulo">
                Quem Somos
            </h3>
            <p className="texto">
                
            </p>
            </main>
            <Rodape/>
        </>
    )
}

export default QuemSomos
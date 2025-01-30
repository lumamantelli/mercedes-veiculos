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
            Somos uma empresa apaixonada por inovação e mobilidade, dedicada a transformar a maneira como você compra veículos. Com uma plataforma digital moderna, segura e intuitiva, conectamos compradores e vendedores de forma prática e eficiente, garantindo uma experiência transparente e sem complicações.
            <br/>
            <br/>
            Nosso compromisso é oferecer um amplo catálogo de veículos novos e seminovos, com informações detalhadas, fotos de alta qualidade e processos simplificados para que você encontre o carro ideal sem sair de casa. Trabalhamos com as melhores concessionárias e vendedores do mercado, assegurando qualidade, procedência e segurança em cada transação.
            <br/>
            <br/>
            Acreditamos que a compra de um veículo deve ser acessível e confiável, por isso, investimos constantemente em tecnologia e atendimento personalizado para proporcionar a melhor jornada de compra.
            <br/>
            <br/>
            Seja para encontrar o seu primeiro carro, trocar de modelo ou simplesmente explorar as melhores ofertas, estamos aqui para facilitar esse processo com transparência, confiança e inovação.
            </p>
            </main>
            <Rodape/>
        </>
    )
}

export default QuemSomos
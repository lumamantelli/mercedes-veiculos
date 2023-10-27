import { useParams } from "react-router-dom"
import "./Veiculo.css"
import { useEffect, useState } from "react"
import MenuSuspenso from "componentes/MenuSuspenso"
import Cabecalho from "componentes/Cabecalho"
import Rodape from "componentes/Rodape"
import { formatPrice } from "Context/FormatPrice"


function Veiculo() {
    const parametros = useParams()
    const [veiculo, setVeiculo] = useState()
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/lumamantelli/mercedes-veiculos-api/veiculos/${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVeiculo(dados)
            })
    }, [parametros.id])

    if(!veiculo) {
        return(
            <p>Não foi possivel encontrar o veículo</p>
        )
    }

    return(
        <main>
            <MenuSuspenso/>
            <Cabecalho/>
            
                <div className="veiculo">
                    <img className="veiculo_img" src={veiculo.imagem} alt={`Foto ${veiculo.modelo}`}/>
                    <div className="veiculo_container">
                        <h4 className="veiculo_modelo">{veiculo.modelo}</h4>
                        <div className="veiculos_container_info">

                            <div className="veiculo_info">
                                <p className="info_titulo">Ano</p>
                                {veiculo.ano}
                            </div>
                            <div className="veiculo_info">
                                <p  className="info_titulo">Cidade</p>
                                {veiculo.cidade} - {veiculo.estado}
                            </div>
                            <div className="veiculo_info">
                                <p  className="info_titulo">Combustível</p>
                                {veiculo.combustivel}
                            </div>
                            <div className="veiculo_info">
                                <p  className="info_titulo">KM</p>
                                {veiculo.km}
                            </div>
                            <div className="veiculo_info">
                                <p  className="info_titulo">Cor</p>
                                {veiculo.cor}
                            </div>
                            <div className="veiculo_info">
                                <p  className="info_titulo">Câmbio</p>
                                {veiculo.cambio}
                            </div>
                            <div className="veiculo_preco">
                                <p  className="info_titulo"
                                >Preço</p>
                                {`${formatPrice(veiculo.preco)}`}
                            </div>
                        </div>
                        <button className="btn_conversar">
                            <img className="logo_whats_conver" src="/imagens/logo-whatsapp.svg" alt="Logo Whatsapp"/>
                            Conversar com o vendedor
                        </button>
                    </div>
                </div>
            
            <Rodape/>
        </main>
    )
}

export default Veiculo
import { useParams } from "react-router-dom"
import "./Veiculo.css"
import { useEffect, useState } from "react"
import MenuSuspenso from "componentes/MenuSuspenso"
import Cabecalho from "componentes/Cabecalho"
import Conteudo from "componentes/Conteudo"
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
            <Conteudo>
                <div className="veiculo_container">
                    <img className="veiculo_img" src={veiculo.imagem} alt={`Foto ${veiculo.modelo}`}/>
                    <div className="veiculo_info">
                        <h4 className="veiculo_nome">{veiculo.modelo}</h4>
                        <p className="veiculo_dados">
                            {veiculo.ano}<br/>
                            {`${formatPrice(veiculo.preco)}`}
                        </p>
                    </div>
                </div>
            </Conteudo>
            <Rodape/>
        </main>
    )
}

export default Veiculo
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
                        <p className="veiculo_info">
                            {veiculo.ano}<br/>
                            {`${formatPrice(veiculo.preco)}`}
                        </p>
                    </div>
                </div>
            
            <Rodape/>
        </main>
    )
}

export default Veiculo
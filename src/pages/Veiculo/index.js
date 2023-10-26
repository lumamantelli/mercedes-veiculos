import { useParams } from "react-router-dom"
import "./Veiculo.css"
import { useEffect, useState } from "react"
import MenuSuspenso from "componentes/MenuSuspenso"
import Cabecalho from "componentes/Cabecalho"
import Conteudo from "componentes/Conteudo"
import Rodape from "componentes/Rodape"


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
                <div>
                    <img src={veiculo.imagem} alt={`Foto ${veiculo.nome}`}/>
                    
                </div>
            </Conteudo>
            <Rodape/>
        </main>
    )
}

export default Veiculo
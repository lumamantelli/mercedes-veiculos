import Banner from 'componentes/Banner'
import Cabecalho from '../../componentes/Cabecalho/index'
import BarraDePesquisa from 'componentes/BarraDePesquisa'
import Conteudo from 'componentes/Conteudo'
import Rodape from 'componentes/Rodape'
import MenuSuspenso from 'componentes/MenuSuspenso'
import Card from 'componentes/Card'
import { useEffect, useState } from 'react'



function Home () {
    const [veiculos, setVeiculos] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/lumamantelli/mercedes-veiculos-api/veiculos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVeiculos(dados)
            })
    }, [])

    return (
        <main>
            <MenuSuspenso/>
            <Cabecalho/>
            <Banner/>
            <BarraDePesquisa/>
            <Conteudo>
                {veiculos.map((veiculo) => {
                    return <Card {...veiculo} key={veiculo.id} />
                })}
            </Conteudo>
            <Rodape/>
        </main>
    )
}

export default Home
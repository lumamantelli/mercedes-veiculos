import Banner from 'componentes/Banner'
import Cabecalho from '../../componentes/Cabecalho/index'
import BarraDePesquisa from 'componentes/BarraDePesquisa'
import Conteudo from 'componentes/Conteudo'
import Rodape from 'componentes/Rodape'
import MenuSuspenso from 'componentes/MenuSuspenso'
import React from 'react'


function Home () {
 
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");


    return (
        <main>
            <MenuSuspenso/>
            <Cabecalho/>
            <Banner/>
            <BarraDePesquisa valorFiltro={valorDoFiltro} setValorFiltro={setValorDoFiltro} />
            <Conteudo searchValue={valorDoFiltro} >
                
            </Conteudo>
            <Rodape/>
        </main>
    )
}

export default Home
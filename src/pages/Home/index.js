import Banner from 'componentes/Banner'
import Cabecalho from '../../componentes/Cabecalho/index'
import BarraDePesquisa from 'componentes/BarraDePesquisa'
import Conteudo from 'componentes/Conteudo'
import Rodape from 'componentes/Rodape'
import MenuSuspenso from 'componentes/MenuSuspenso'



function Home () {
    return (
        <main>
            <MenuSuspenso/>
            <Cabecalho/>
            <Banner/>
            <BarraDePesquisa/>
            <Conteudo/>
            <Rodape/>
        </main>
    )
}

export default Home
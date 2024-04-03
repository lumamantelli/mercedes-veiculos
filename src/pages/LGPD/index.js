import MenuSuspenso from 'componentes/MenuSuspenso'
import './Lgpd.css'
import Cabecalho from 'componentes/Cabecalho'
import Rodape from 'componentes/Rodape'

function Lgpd () {
    return (
        <>
        <MenuSuspenso/>
        <Cabecalho/>
        <main className='conteudo'>
            <h3 className='titulo'>
                Lei Geral de Proteção de Dados (LGPD)
            </h3>
            <p className='texto'>
                No cenário digital em constante evolução, a privacidade e a proteção dos dados pessoais tornaram-se temas centrais. Para atender a essa demanda crescente por segurança digital, o Brasil promulgou a Lei Geral de Proteção de Dados (LGPD), representando um marco significativo na garantia dos direitos individuais em um ambiente virtual.
                <br/>
                <br/>
                A LGPD, instituída pela Lei nº 13.709/2018, estabelece normas claras sobre a coleta, armazenamento, tratamento e compartilhamento de dados pessoais por organizações públicas e privadas. Seu principal propósito é proteger a privacidade do indivíduo, conferindo-lhe maior controle sobre suas informações pessoais.
                <br/>
                <br/>           
                Um dos princípios fundamentais da LGPD é o consentimento informado. As organizações devem obter permissão explícita e clara dos titulares dos dados antes de coletar ou processar suas informações pessoais. Isso confere aos usuários o direito de decisão sobre como suas informações serão utilizadas.
                <br/>
                <br/>
                A legislação preconiza a transparência nas práticas de tratamento de dados, exigindo que as organizações forneçam informações claras sobre suas políticas de privacidade. Além disso, as empresas são responsáveis por garantir a segurança dos dados, adotando medidas técnicas e administrativas para prevenir incidentes de segurança.
                <br/>
                <br/>
                A LGPD concede aos titulares dos dados uma série de direitos, incluindo o acesso às informações que as empresas possuem sobre eles, a correção de dados incorretos, a eliminação de dados desnecessários e, em alguns casos, a portabilidade dos dados para outros serviços.
                <br/>
                <br/>
                Para assegurar o cumprimento das normas, a LGPD prevê penalidades rigorosas para organizações que não estejam em conformidade. As sanções podem variar desde advertências até multas substanciais, proporcionais à gravidade da infração.
                <br/>
                <br/>
                A LGPD alinha o Brasil a outras legislações internacionais de proteção de dados, como o Regulamento Geral de Proteção de Dados (GDPR) da União Europeia, fortalecendo a posição do país no cenário global e facilitando a transferência internacional de dados.
                <br/>
                <br/>
                Embora a adaptação à LGPD represente desafios para as organizações, também oferece oportunidades para promover a confiança do consumidor, aprimorar práticas de segurança e inovar de maneira ética e responsável.
                <br/>
                <br/>
                A LGPD surge como um instrumento essencial para proteger a privacidade e os direitos individuais em um mundo digitalizado. Ao promover uma cultura de responsabilidade no tratamento de dados, a lei contribui para a construção de um ambiente online mais seguro e confiável, onde cada cidadão tem controle sobre suas informações pessoais. Esteja ciente, exerça seus direitos e navegue com segurança na era digital.
            </p>
        </main>
        <Rodape/>
        </>
    )
}

export default Lgpd
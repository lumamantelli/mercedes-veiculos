import Card from 'componentes/Card'
import './Conteudo.css'
import { useEffect, useState } from 'react'

function Conteudo({ searchValue }) {
    const [veiculos, setVeiculos] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/lumamantelli/mercedes-veiculos-api/veiculos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVeiculos(dados)
            })
    }, [])

    return (
        <section className='content'>
            <div className='card_container' data-container>

                {veiculos
                    .filter((veiculo) => {
                        const titleNormalized = veiculo.modelo.toLowerCase()
                        const searchValueNormalized = searchValue.toLowerCase()
                        return titleNormalized.includes(searchValueNormalized)
                    })

                    .map((veiculo) => {
                        return <Card {...veiculo} key={veiculo.id} />
                })}
            </div> 
            <div className='ver_mais'>
                <h5 className='ver_mais_texto'>Ver mais</h5>
                <img src='/imagens/seta.svg' alt='seta'/>
            </div>
            <div className='whatsapp'>
                <a target='blank' href='https://wa.me/5566996231390?text=Olá, vim do catálogo'>
                    <button className='btn_whatsapp'>
                        <img className='logo_whats' src='/imagens/logo-whatsapp.svg' alt='Logo Whatsapp'/>
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Conteudo
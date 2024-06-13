import Card from 'componentes/Card'
import './Conteudo.css'
import { useEffect, useState } from 'react'
import api from 'api/api'

function Conteudo({ searchValue }) {
    // modelo anterior com a api do typecode
    //const [veiculos, setVeiculos] = useState([])
    const [carros, setCarros] = useState([])

    useEffect(() => {
        api
        .get("/") //com a api do typecode a rota é /veiculos
       
          
            // Modelo anterior com api do type code
            //.then((resposta) => setVeiculos (resposta.data))
            .then((resposta) => setCarros (resposta.data))
          
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
              });
    }, [])

    return (
        <section className='content'>
            <div className='card_container' data-container>

                {/* Modelo anterior com a api typecode */}
                {/* {veiculos
                    .filter((veiculo) => {
                        const titleNormalized = veiculo.modelo.toLowerCase()
                        const searchValueNormalized = searchValue.toLowerCase()
                        return titleNormalized.includes(searchValueNormalized)
                    })

                    .map((veiculo) => {
                        return <Card {...veiculo} key={veiculo.id_car} />
                })} */}
                {carros
                    .filter((carro) => {
                        const titleNormalized = carro.modelo_car.toLowerCase()
                        const searchValueNormalized = searchValue.toLowerCase()
                        return titleNormalized.includes(searchValueNormalized)
                    })

                    .map((carro) => {
                        return <Card {...carro} key={carro.id_car} />
                })}
            </div> 
            <button className='ver_mais'>
                <h5 className='ver_mais_texto'>Ver mais</h5>
                <img src='/imagens/seta.svg' alt='seta'/>
            </button>
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
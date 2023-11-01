import './Card.css'
import 'bootstrap/dist/css/bootstrap.css'
import { formatPrice } from 'Context/FormatPrice'
import { Carousel, CarouselItem } from 'react-bootstrap'

function Card({ imagem1, imagem2, imagem3, imagem4, imagem5, modelo, ano, motor, tracao, cambio, preco, id }) {
    return (
        <div className='card_content'>
            <Carousel className='card_fotos'>
                <CarouselItem>
                    <img className='card_foto' src={imagem1} alt='Foto 1 Carro'/>
                </CarouselItem>
                <CarouselItem>
                    <img className='card_foto' src={imagem2} alt='Foto 1 Carro'/>
                </CarouselItem>
                <CarouselItem>
                    <img className='card_foto' src={imagem3} alt='Foto 1 Carro'/>
                </CarouselItem>
                <CarouselItem>
                    <img className='card_foto' src={imagem4} alt='Foto 1 Carro'/>
                </CarouselItem>
                <CarouselItem>
                    <img className='card_foto' src={imagem5} alt='Foto 1 Carro'/>
                </CarouselItem>
            </Carousel>

            <div className='card_informacoes'>
                <div className='nome_informacoes'>
                    <h6 className='modelo'>{modelo}</h6>
                    <div className='info_card'>
                        <p className='txt'>{ano}</p>
                        <p className='txt'>{motor}</p>
                        <p className='txt'>{tracao}</p>
                        <p className='txt'>{cambio}</p>
                    </div>
                </div>
                <div className='preco_btn-mais'>
                    <h6 className='preco'>{formatPrice(preco)}</h6>
                    <a className='link_mais' href={`./${id}`}>
                        <button className='btn_mais'>+</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
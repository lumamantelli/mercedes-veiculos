import { formatPrice } from 'Context/FormatPrice'
import './Card.css'

function Card({ imagem, nome, ano, preco, id }) {
    return (
        <div className='card'>
            <div className='card_fotos'>
                <img className='card_foto' src={imagem} alt='Foto 1 Carro'/>
            </div>
            <div className='card_informacoes'>
                <div className='nome_informacoes'>
                    <h4>{nome}</h4>
                    <h5>{ano}</h5>
                </div>
                <div className='preco_btn-mais'>
                    <h4 className='preco'>{formatPrice(preco)}</h4>
                    <a href={`./${id}`}>
                        <button className='btn_mais'>+</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
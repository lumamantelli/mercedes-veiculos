import './Conteudo.css'

function Conteudo() {
    return (
        <section className='content'>
            <div className='card_container'>
                <div className='card'>
                    <div className='card_fotos'>
                        <img className='card_foto' src='/imagens/hilux.jpg' alt='Foto 1 Carro'/>
                    </div>
                    <div className='card_informacoes'>
                        <div className='nome_informacoes'>
                            <h4>Ram 1500 Limited</h4>
                            <h5>2023</h5>
                        </div>
                        <div className='preco_btn-mais'>
                            <h4 className='preco'>R$529.990,00</h4>
                            <button className='btn_mais'>+</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card_fotos'>
                        <img className='card_foto' src='/imagens/hilux.jpg' alt='Foto 1 Carro'/>
                    </div>
                    <div className='card_informacoes'>
                        <div className='nome_informacoes'>
                            <h4>Ram 1500 Limited</h4>
                            <h5>2023</h5>
                        </div>
                        <div className='preco_btn-mais'>
                            <h4 className='preco'>R$529.990,00</h4>
                            <button className='btn_mais'>+</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card_fotos'>
                        <img className='card_foto' src='/imagens/hilux.jpg' alt='Foto 1 Carro'/>
                    </div>
                    <div className='card_informacoes'>
                        <div className='nome_informacoes'>
                            <h4>Ram 1500 Limited</h4>
                            <h5>2023</h5>
                        </div>
                        <div className='preco_btn-mais'>
                            <h4 className='preco'>R$529.990,00</h4>
                            <button className='btn_mais'>+</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card_fotos'>
                        <img className='card_foto' src='/imagens/hilux.jpg' alt='Foto 1 Carro'/>
                    </div>
                    <div className='card_informacoes'>
                        <div className='nome_informacoes'>
                            <h4>Ram 1500 Limited</h4>
                            <h5>2023</h5>
                        </div>
                        <div className='preco_btn-mais'>
                            <h4 className='preco'>R$529.990,00</h4>
                            <button className='btn_mais'>+</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card_fotos'>
                        <img className='card_foto' src='/imagens/hilux.jpg' alt='Foto 1 Carro'/>
                    </div>
                    <div className='card_informacoes'>
                        <div className='nome_informacoes'>
                            <h4>Ram 1500 Limited</h4>
                            <h5>2023</h5>
                        </div>
                        <div className='preco_btn-mais'>
                            <h4 className='preco'>R$529.990,00</h4>
                            <button className='btn_mais'>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ver_mais'>
                <h5>Ver mais</h5>
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
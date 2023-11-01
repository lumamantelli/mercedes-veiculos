
import './Adicionar.css'
import Cabecalho from 'componentes/Cabecalho'
import Rodape from 'componentes/Rodape'

function Adicionar() {
    return(
        <>
            <Cabecalho/>
            <main className='main_add'>
                <form className='formulario form_add'>
                    <h2>Adicionar novo carro</h2>
                    <fieldset className='fieldset_add'>
                        <label>
                            Modelo
                        </label>
                        <input className='input_add' type='text'/>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Ano
                        </label>
                        <select className='select_add'>
                            <option className='option_disabled' selected disabled>Selecione um ano</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                            <option>2009</option>
                            <option>2008</option>
                            <option>2007</option>
                            <option>2006</option>
                            <option>2005</option>
                            <option>2004</option>
                            <option>2003</option>
                            <option>2002</option>
                            <option>2001</option>
                            <option>2000</option>
                            <option>1999</option>
                            <option>1998</option>
                            <option>1997</option>
                            <option>1996</option>
                            <option>1995</option>
                            <option>1994</option>
                            <option>1993</option>
                        </select>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Cidade
                        </label>
                        <input className='input_add' type='text'/>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Estado
                        </label>
                        <input className='input_add' placeholder='Apenas sigla' type='text'/>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Motor
                        </label>
                        <input className='input_add' type='text'/>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            KM
                        </label>
                        <input className='input_add' type='number'/>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Tração
                        </label>
                        <select className='select_add'>
                            <option className='option_disabled' selected disabled>Selecione...</option>
                            <option>4x4</option>
                            <option>4x2</option>
                            <option>AWD</option>
                        </select>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Cabine
                        </label>
                        <select className='select_add'>
                            <option className='option_disabled' selected disabled>Selecione...</option>
                            <option>Dupla</option>
                            <option>Simples</option>
                        </select>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Combustível
                        </label>
                        <select className='select_add'>
                            <option className='option_disabled' selected disabled>Selecione...</option>
                            <option>Gasolina</option>
                            <option>Álcool</option>
                            <option>Flex</option>
                            <option>Diesel</option>
                        </select>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Cor
                        </label>
                        <input className='input_add' type='text'/>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Câmbio
                        </label>
                        <select className='select_add'>
                            <option className='option_disabled' selected disabled>Selecione...</option>
                            <option>Manual</option>
                            <option>Automático</option>
                        </select>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Carroceria
                        </label>
                        <input className='input_add'/>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Aceita Troca?
                        </label>
                        <select>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>
                    </fieldset>
                    <fieldset className='fieldset_add'>
                        <label>
                            Preço
                        </label>
                        <input className='input_add' type='number'/>
                    </fieldset>
                    <button type='submit' className='btn__add'>
                        Adicionar veículo
                    </button>

                </form>
            </main>
            <Rodape/>
        </>
    )
}

export default Adicionar
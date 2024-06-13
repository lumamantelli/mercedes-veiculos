import { React, useState } from "react";
import './Formulario.css'



 const Formulario = () => {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [tipo_pessoa, setTipo_pessoa] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = { name, whatsapp, tipo_pessoa, message };
      await fetch('http://localhost:8000/send_mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => { 
          const parser = new DOMParser();
          const html = parser.parseFromString(data, 'text/html');
          const text = html.body.textContent;
          const json = JSON.parse(text);
          console.log(json);
        })
        .catch((error) => console.error(error));
    };
  
  
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Nome</label>
          <input
            className="input_form"
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            minLength="3" />
        </fieldset>
        <fieldset>
          <label htmlFor="whatsapp">Whatsapp</label>
          <input
            className="input_form"
            type="tel"
            name="whatsapp"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            minLength="11" />
        </fieldset>
        <div className="checkbox">
          <label>Você é:</label>
          <fieldset className="form-radios">
            <input
              className="form-radios-input"
              type="radio"
              name="tipo_pessoa"
              value="Pessoa Física"
              checked={tipo_pessoa === 'Pessoa Física'}
              onChange={() => setTipo_pessoa('Pessoa Física')} />
            <label className="form-radios-label" htmlFor="tipo_pessoa">
              Pessoa Física
            </label>
          </fieldset>
          <fieldset className="form-radios">
            <input
              className="form-radios-input"
              type="radio"
              name="tipo_pessoa"
              value="Pessoa Jurídica"
              checked={tipo_pessoa === 'Pessoa Jurídica'}
              onChange={() => setTipo_pessoa('Pessoa Jurídica')} />
            <label className="form-radios-label" htmlFor="tipo_pessoa">
              Pessoa Jurídica
            </label>
          </fieldset>
        </div>
        <fieldset>
          <label htmlFor="message">Deixe uma mensagem</label>
          <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)} />
        </fieldset>
        <button className="btn_enviar_form" type="submit">
          Enviar
        </button>
      </form>
    );
  };

  export default Formulario;
import { useState } from 'react'
import axios from 'axios';
import './app.css';
import { useEffect } from 'react';


const api = axios.create({
  baseURL: 'https://gbc-cuidadores-backend.herokuapp.com/',
});
const getStates = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
})

function FormComponent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState('')
  const [messageSent, setMessageSent] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedState, setSelectedState] = useState('0')
  const [selectedCity, setSelectedCity] = useState('0')

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        setStates(response.data)
      })
  }, [])
  useEffect(() => {
    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`)
      .then(response => {
        setCities(response.data)
      })
  }, [selectedState])

  function handleSelectState(event) {
    const uf = event.target.value;
    setSelectedState(uf)
  }
  function handleSelectCity(event) {
    const city = event.target.value;
    setSelectedCity(city)
  }

  async function handleSendEmail(e) {
    e.preventDefault();

    if (selectedCity != 0) {
      setMessageSent(true)
      await api.post("/", {
        name,
        email,
        contact,
        selectedState,
        selectedCity,
        address,
        message
      })
    } else {
      setMessageError(true)
    }
    // console.log("Nome:", name, "email: ", email, "contact:", contact, "Endereço:", address, "Mensagem:", message, "UF:", selectedState, "City:", selectedCity)
  }
  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }

  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
  }
  function handleCloseModal() {
    setMessageSent(false)
    setMessageError(false)
    setName('')
    setEmail('')
    setContact('')
    setAddress('')
    setMessage('')
    setSelectedCity('')
    setSelectedState('')
  }
  function handleCloseModalOnErrorCause() {
    setMessageError(false)
  }

  return (
    <>
      <form onSubmit={handleSendEmail} className="App">
        <div className="inputBox">
          <input
            type="text"
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <span>Nome</span>
        </div>
        <div className="inputBox">
          <input
            type="text"
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input
            type="tel"
            required
            maxLength="15"
            onKeyUp={handlePhone}
            value={contact}
            onChange={event => setContact(event.target.value)}
          />
          <span>Celular</span>
        </div>


        <div className="inputBox">
          <input
            type="text"
            required
            value={address}
            onChange={event => setAddress(event.target.value)}
          />
          <span>Endereço</span>
        </div>
        <div className="inputBoxGroup">

          <select id="state" name="state" onChange={handleSelectState} required >
            <option value="0">Estado</option>
            {states.map((uf) => (
              <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
            ))}
          </select>

          <select id="city" name="city" onChange={handleSelectCity} required className={!handleSelectCity !== 0 ? 'selected' : ''}>
            <option value="0">Município</option>
            {cities.map((city) => (
              <option key={city.id} value={city.nome}>{city.nome}</option>
            ))}
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Descreva sua necessidade"
          value={message}
          onChange={event => setMessage(event.target.value)}
        ></textarea>
        <input className='button' type="submit" value="Enviar email" />
      </form>

      <div id='modalConfirm' className={messageSent ? 'modal-confirm show' : 'modal-confirm '}>
        <div className="content">
          <h1>Email enviado!</h1>
          <p>Obrigado por entrar em contato conosco, iremos retornar o mais rápido possível.</p>
          <a onClick={handleCloseModal} href="#home">Voltar para o site</a>
        </div>
      </div>
      <div id='modalConfirm' className={messageError ? 'modal-confirm show error' : 'modal-confirm '}>
        <div className="content">
          <h1>ERRO!</h1>
          <p>Preencha corretamente todos os campos antes de enviar.</p>
          <a onClick={handleCloseModalOnErrorCause} href="#contact">Voltar para o site</a>
        </div>
      </div>
    </>
  )
}
export default FormComponent

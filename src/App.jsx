import { useState } from 'react'
import axios from 'axios';
import './app.css';


const api = axios.create({
  baseURL: 'https://gbc-cuidadores-backend.herokuapp.com/',
});

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')

  async function handleSendEmail(e) {
    e.preventDefault();
  
    await api.post("/", {
      name,
      email,
      contact,
      message
    })

    console.log("Mensagem enviada!", name, message)
  }

  return (
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
            type="text"
            required
            value={contact}
            onChange={event => setContact(event.target.value)}
          />
          <span>Celular</span>
        </div>
        <textarea
          name="message"
          placeholder="Descreva sua necessidade"
          value={message}
          onChange={event => setMessage(event.target.value)}
        ></textarea>
        <input className='button' type="submit" value="Enviar email" />
      </form>
  )
}
export default App

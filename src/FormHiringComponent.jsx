import { useState } from 'react'
import axios from 'axios';
import './app.css';


const api = axios.create({
  baseURL: 'https://gbc-cuidadores-backend.herokuapp.com/',
});

function FormHiringComponent() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [state, setState] = useState('')
  const [departament, setDepartament] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [emailSent, setEmailSent] = useState(false)



  async function handleSendEmail(e) {
    e.preventDefault();
    setEmailSent(true)
    console.log("Nome:", name)
    console.log("Contato:", contact)
    console.log("Estado:", state)
    console.log("Departamento:", departament)
    console.log("Especialização:", specialization)

    // await api.post("/", {
    //   name,
    //   email,
    //   contact,
    //   message
    // })

  }
  function handleCloseModal() {
    setName('')
    setContact('')
    setState('')
    setDepartament('')
    setSpecialization('')
    setEmailSent(false)
  }

  return (
    <>
      <form onSubmit={handleSendEmail} className="formHiring">
        <div className="col-a">
          <div className="inputBox">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id='name'
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="contact">Whatsapp</label>
            <input
              type="text"
              id='contact'
              value={contact}
              onChange={event => setContact(event.target.value)}
            />
          </div>
        </div>
        <div className="col-b">
          <div className="inputBox">
            <label htmlFor="state">De onde você é?</label>
            <select id="state" name="state" value={state} onChange={e => setState(e.target.value)}>
              <option value="">Clique aqui e selecione um estado</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="SP">São Paulo</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
            </select>
          </div>
          <div className="inputBox">
            <label htmlFor="departament">Em qual área tem interesse?</label>
            <select id="departament" name="departament" value={state} onChange={e => setDepartament(e.target.value)}>
              <option value="">Clique aqui e selecione uma área</option>
              <option value="cuidador de idosos">Cuidador de Idosos</option>
              <option value="técnico de enfermagem">Técnico de enfermagem</option>
              <option value="profissional de nível superior">Profissional de nível superior</option>
            </select>
          </div>
          <div className="inputBox">
            <label htmlFor="specialization">Se profissional de nível superior, qual?</label>
            <select id="specialization" name="specialization" value={state} onChange={e => setSpecialization(e.target.value)}>
              <option value="">Clique aqui e selecione uma formação</option>
              <option value="enfermeiro">Enfermeiro</option>
              <option value="fisioterapeuta">Fisioterapeuta</option>
              <option value="fonoaudiólogo">Fonoaudiólogo</option>
              <option value="psicólogo">Psicólogo</option>
            </select>
          </div>
        </div>
        <input className='button' type="submit" value="Enviar" />
      </form>

      <div id='modalConfirm' className={emailSent ? 'modal-confirm show' : 'modal-confirm '}>
        <div className="content">
          <h1>Email enviado!</h1>
          <p>Obrigado pelo interesse em fazer parte da família GBC - Grupo Bem Cuidar! <br /> Aguarde nosso retorno via telefone.</p>
          <a onClick={handleCloseModal} href="#home">Voltar para o site</a>
        </div>
      </div>
    </>
  )
}
export default FormHiringComponent

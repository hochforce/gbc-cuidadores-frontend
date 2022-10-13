import React, { useState, useEffect } from 'react'
import Iframe from 'react-iframe'
import FormComponent from './FormComponent';
import './app.css';

function App() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemHomeActive, setItemHomeActive] = useState(true)
  const [itemServicesActive, setItemServicesActive] = useState(false)
  const [itemAboutActive, setItemAboutActive] = useState(false)
  const [itemContactActive, setItemContactActive] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500);
      activateMenuServices()
      activateMenuContact()
      activateMenuAbout()
      activateMenuHome()
    });
  }, []);

  function openMenu() {
    setMenuOpen(true)
  }
  function closeMenu() {
    setMenuOpen(false)
  }

  function activateMenuServices() {
    const targetLine = scrollY + innerHeight / 2;

    //Verificar se a seção passou da linha imaginária (targetLine)
    const sectionTop = services.offsetTop;
    const sectionHeight = services.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    // console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    // console.log(' O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    const sectionBoudaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = services.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
    // if (menuElement === 'home') {
    //   setItemHomeActive(true)
      
    // } else {
    //   setItemHomeActive(false)
      
    // }
    // if (menuElement === 'services') {
    //   setItemServicesActive(true)
    // } else {
    //   setItemServicesActive(false)
    // }
    setItemServicesActive(false)
    if (sectionBoudaries) {
      setItemServicesActive(true)
    }
  }
  function activateMenuHome() {
    const targetLine = scrollY + innerHeight / 2;

    //Verificar se a seção passou da linha imaginária (targetLine)
    const sectionTop = home.offsetTop;
    const sectionHeight = home.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    // console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    // console.log(' O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    const sectionBoudaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = home.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
    
    setItemHomeActive(false)
    if (sectionBoudaries) {
      setItemHomeActive(true)
    }
  }
  function activateMenuAbout() {
    const targetLine = scrollY + innerHeight / 2;

    //Verificar se a seção passou da linha imaginária (targetLine)
    const sectionTop = about.offsetTop;
    const sectionHeight = about.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    // console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    // console.log(' O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    const sectionBoudaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = about.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
    
    setItemAboutActive(false)
    if (sectionBoudaries) {
      setItemAboutActive(true)
    }
  }
  function activateMenuContact() {
    const targetLine = scrollY + innerHeight / 2;

    //Verificar se a seção passou da linha imaginária (targetLine)
    const sectionTop = contact.offsetTop;
    const sectionHeight = contact.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    // console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    // console.log(' O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    const sectionBoudaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = contact.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
    
    setItemContactActive(false)
    if (sectionBoudaries) {
      setItemContactActive(true)
    }
  }

  return (
    <body className={menuOpen ? 'menu-expanded' : ''}>
      <nav id="navigation" className="scroll">
        <div className="wrapper">
          <a href="#" className="logo" >
            <img className="logo-white" src="./src/assets/logo-horizontal-white.png" alt="" />
          </a>

          <div className="menu">
            <ul>
              <li><a className={itemHomeActive ? 'active' : ''} onclick={closeMenu} href="#home"> INÍCIO</a></li>
              <li><a className={itemServicesActive ? 'active' : ''} onclick={closeMenu} href="#services"> SERVIÇOS</a></li>
              <li><a className={itemAboutActive ? 'active' : ''} onclick={closeMenu} href="#about"> SOBRE NÓS</a></li>
              <li><a className={itemContactActive ? 'active' : ''} onclick={closeMenu} href="#contact"> CONTATO</a></li>
              <li><a onclick={closeMenu} href="https://chat.whatsapp.com/Co6FxoGM8e2HN1zNjJ9dyX" target="_blank"> TRABALHE
                CONOSCO</a></li>
            </ul>

            <h4>Clique aqui e acesse nossas redes sociais</h4>
            <ul className="social-links">
              <li><a target="_blank" href="https://facebook.com/gbc_cuidadores"><img src="./src/assets/facebook.svg" alt="" /></a>
              </li>
              <li><a target="_blank" href="https://instagram.com/gbc_cuidadores"><img src="./src/assets/instagram.svg"
                alt="" /></a></li>
              <li><a target="_blank" href="http://wa.me/5521990300876"><img src="./src/assets/whatsapp-rounded.svg" alt="" /></a>
              </li>
            </ul>
          </div>

          <button aria-expanded="false" aria-label="Abrir menu" className="open-menu" onClick={openMenu}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_61_152)">
                <path d="M10 20H30" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 12H30" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 28L30 28" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <filter id="filter0_d_61_152" x="-4" y="0" width="48" height="48" filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_152" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_61_152" result="shape" />
                </filter>
              </defs>
            </svg>
          </button>



          <button aria-expanded="true" aria-label="Fechar menu" className="close-menu" onClick={closeMenu}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 10L10 30M10 10L30 30" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </nav>
      <section id="home" >
        <div className="content">
          <div className="view">

            <h3>
              Contratar os nossos serviços significa poder contar com todo cuidado e atenção na hora que você ou alguém
              que você ama mais precisa.
            </h3>
            <div className="skills">
              <p>
                CUIDADORES DE IDOSOS
              </p>
              <p>
                PROFISSIONAIS DE ENFERMAGEM
              </p>
            </div>
            <a className="button" href="#contact">
              QUERO UM ORÇAMENTO
            </a>
          </div>
          <img src="./src/assets/senior-woman-with-her-caregiver-outdoor-light.jpg" alt="" />

        </div>

      </section>

      <section id="services" >
        <div className="wrapper">
          <div className="col-a">
            <header>
              <h4>Serviços</h4>
              <h3>Além de fornecer cuidadores de idosos e profissionais de enfermagem capacitados, realizamos* alguns
                procedimentos específicos</h3>
              <div className="procedures">
                <p>
                  <img src="./src/assets/check.png"
                    alt=" verde com um visto no meio representando um ícone de check list" />
                  Administração de medicamentos
                </p>
                <p>
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  Curativos pós-operatórios
                </p>
                <p>
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  Curativos para escaras (Lesão por pressão)
                </p>
                <p>
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  Sondagem vesical e enteral
                </p>
                <p>
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  Administração de antibioticoterapia
                </p>
                <p>
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  Esvaziamento e higienização de bolsas de colostomia
                </p>
                <p>
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  Acompanhamento em unidades hospitalares
                </p>
                <p>
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  Coleta e encaminhamento de material para laboratório
                </p>
              </div>
              <h5>
                * Todo material deve ser disponibilizado pelo familiar.<br />
                * Entre em contato para outros tipos de procedimentos.<br />
                * Verificar o valor e a disponibilidade local.
              </h5>
              <a className="button" href="#contact">
                QUERO UM ORÇAMENTO
              </a>
            </header>
          </div>
          <div className="col-b">
            <div className="content">
              <img src="./src/assets/old-woman-looking-at-caregiver.jpg"
                alt="Idosa sentada sorrindo para enfermeira que lhe abraça por trás." />
            </div>
          </div>
        </div>
      </section>


      <section id="about">
        <div className="wrapper">
          <div className="col-a">
            <header>
              <h4>Sobre nós</h4>
              <h3>Nosso diferencial</h3>
            </header>
            <div className="content">
              <div className="procedures">
                <p>
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  Os Gestores do “GRUPO BEM CUIDAR” possuem mais de 25 anos de experiência na assistência e nos cuidados com
                  idosos, por isso entendemos suas necessidades
                </p>
                <p>
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  Equipe de cuidadores de idosos experiente e humanizada
                </p>
                <div className="paragraph">
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  <p>
                    Nossos profissionais são selecionados <strong>rigorosamente</strong>
                  </p>
                </div>
                <p>
                  <img src="./src/assets/check.png"
                    alt="Bolinha verde com um visto no meio representando um ícone de check list" />
                  Atendimento 24hs por dia
                </p>

              </div>
              <p>
                Tudo isso para você ter a tranquilidade e a certeza de que seu familiar está em boas mãos.
              </p>
            </div>
            <a className="button" href="#contact">
              QUERO UM ORÇAMENTO
            </a>
          </div>
          <div className="col-b">
            <div className="office"></div>
            <i>*Nosso Escritório</i>
          </div>
        </div>

      </section>

      <section id="contact">
        <div className="wrapper">
          <div className="col-a">
            <header>
              <h4>Contato</h4>
              <h3>Entre em contato com a gente</h3>
            </header>

            <div className="content">
              <ul>
                <li>
                  <i className="bi bi-telephone "></i>
                  (21) 2042 4233
                </li>
                <li>
                  <i className="bi bi-envelope "></i>
                  contato@grupobemcuidar.com.br
                </li>
              </ul>
              <FormComponent />
              
              <a className="button" href="http://wa.me/5521990300876" target="_blank">
              <img src="./src/assets/whatsapp-outlied-white.png" alt="Ícone reprensentando o whatsapp" />
                Ou via Whatsapp
              </a>
            </div>
          </div>
          <div className="col-b">
            <img src="./src/assets/notebook-on-the-table.jpg" alt="Homen negro com moletom bege mexendo no celular e sorrindo." />
            {/* Photo by <a href="https://unsplash.com/@firmbee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Firmbee.com</a> on <a href="https://unsplash.com/s/photos/contact?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrapper">
          <div className="col-a">
            <a href="#" className="logo">
              <img className="logo-white" src="./src/assets/logo-horizontal-white.png" alt="" />
            </a>
            <p>
              GRUPO BEM CUIDAR - CUIDANDO DE PESSOAS
              48.127.791/0001-41
            </p>
          </div>
          <div className="col-b">
            <h4>Clique aqui e acesse nossas redes sociais</h4>
            <ul className="social-links">
              <li><a target="_blank" href="https://facebook.com/gbc_cuidadores"><img src="./src/assets/facebook.svg" alt="" /></a>
              </li>
              <li><a target="_blank" href="https://instagram.com/gbc_cuidadores"><img src="./src/assets/instagram.svg"
                alt="" /></a></li>
              <li><a target="_blank" href="http://wa.me/5521990300876"><img src="./src/assets/whatsapp-rounded.svg" alt="" /></a>
              </li>
            </ul>

          </div>
          <div className="col-c">
            <p>

              Avenida Marechal Câmara,160, Edifício Orly, Sala 1107, Condomínio Centro Empresarial Charles de Gaulle,
              Centro, Rio de Janeiro - RJ, 20020-080
            </p>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.5537751650809!2d-43.171270414578224!3d-22.90940359999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fc737f27527%3A0x84c3f2f372d8a434!2zTcOocmVzIEVzY3JpdMOzcmlvcw!5e0!3m2!1spt-BR!2sbr!4v1664891830565!5m2!1spt-BR!2sbr"
              width="300" height="100" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></Iframe>

            <p>
              &#169; 2022 HochDev
            </p>
          </div>
        </div>
      </footer>

      <a id="backToTopButton" href="#home" className={scroll ? 'show' : ''} >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#00856F" />
          <path d="M20 27V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13 20L20 13L27 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>


      <a className="floating-whatsapp" href="http://wa.me/5521990300876" target="_blank">
        <img src="./src/assets/whatsapp-rounded-green.jpg" alt="Ícone reprensentando o whatsapp" />
      </a>

      <script src="https://unpkg.com/scrollreveal"></script>
      <script src="./main.js"></script>
      <script type="module" src="/main.jsx"></script>
    </body>
  )
}

export default App;
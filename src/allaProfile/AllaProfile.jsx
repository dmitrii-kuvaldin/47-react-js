import logo from '../logo.svg'
import './allaProfile.css'
import puffin from '../assets/puffin.jpg'
function AllaProfile() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ДОБРА ВСЕМ  <code></code> ДОБРЫМ ЛЮДЯМ !
        </p>
        <img className='puffin' src={puffin} alt="puffin" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alla Novytska
        </a>
        <h5>
        Мои Хобби- это фотографии.

        Также я рисую маслянными и акриловыми красками. <br/>

        Освоив несколько творческих профессий, я всегда мечтала создавать сайты!

        Мои мечты начинают сбываться здесь, в Германии.

        Я приехала в Германию в 2022 году с мамой-инвалидом и собачкой.

        Закончила курсы Немецкого языка в ACADEMY  UBERLINGEN.

        Сейчас изучаю BACKEND и FRONTEND  в AIT-TR  GmbH .
        </h5>
      </header>
    </div>
  )
}

export default AllaProfile;

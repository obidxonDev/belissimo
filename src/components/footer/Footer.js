import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="main__data container">
        <div className="about">
          <h2>Bellissimo Pizza</h2>
          <div className="links">
            <p>Biz Haqimizda</p>
            <p>Ommaviy Ofera</p>
            <p>Maxfiylik Siyosati</p>
            <p>Halol Sertifikati</p>
          </div>
        </div>
        <div className="payment">
          <h2>Tolov Usullari</h2>
          <div className="img">
            <img width={100} src="https://bellissimo.uz/images/payme-footer.svg" alt="" />
            <img width={50} src="https://bellissimo.uz/_next/image?url=%2Fimages%2FUzcard-orange.png&w=48&q=75" alt="" />
          </div>
        </div>
        <div className="add">
          <h2>Hamkorlik</h2>
          <div className="emplyee">
            <p>Franchayzi</p>
            <p>Bizning Ish O'rinlarimiz</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom container">
        <p>© 2016-2023 Bellissimo Pizza.</p>
        <div className="footer__images">
          <img src="https://bellissimo.uz/images/instagram.svg" alt="" />
          <img src="https://bellissimo.uz/images/tiktok.svg" alt="" />
          <img src="https://bellissimo.uz/images/telegram-icon.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
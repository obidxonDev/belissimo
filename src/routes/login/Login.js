import React, { useState } from 'react'
import OtpInput from 'otp-input-react'
import './Login.css'

function Login() {
   const [userNumber, setUsetNumber] = useState("")
   const [userName, setUserName] = useState("")
   const [otp, setOtp] = useState("")
   const [submitted, setSubmitted] = useState(false)
   const regex = /^\+998[0-9]{9}$/
   const isValid = regex.test(userNumber);
   const [verifyOtp, setVerifyOtp] = useState(false)
   const [loading, setLoading] = useState(false)

   const submit = (e) => {
      e.preventDefault()
      setSubmitted(true)
      if (isValid === true && userNumber.length === 13) {
         console.log("numbeer");
         setVerifyOtp(true)

      } else {
         console.log("not number");
      }
   }
   // console.log(userNumber);
   return (
      <div className='login__container'>
         <React.Fragment>
            {!verifyOtp ?
               <form onSubmit={submit} className="login">
                  <h1>Raqamingizni Kiriting</h1>
                  <input maxLength={13} type="text" placeholder='+998 (__) ___-__-__' value={userNumber} onChange={(e) => setUsetNumber(e.target.value)} />
                  {submitted && !isValid && (<div style={{ color: 'red' }}>Notogri Raqam</div>)}
                  <button style={isValid ? { backgroundColor: "#262A2C" } : {}} >Kodni Qabul Qilish</button>
               </form>
               :
               <form className='verify__phone'>
                  <p>Kabinetga kirish uchun biz kodni ko'rsatilgan telefon raqamga SMS yuboramiz: <br/> +998988798002 <br/> <span onClick={() => setVerifyOtp(false)}>Raqamni Ozgartirish</span></p>
                  <input className='name__input' type="text" placeholder='Ismingiz' required value={userName} onChange={(e) => setUserName(e.target.value)} />
                  <OtpInput
                     value={otp}
                     onChange={setOtp}
                     OTPLength={4}
                     otpType="number"
                     disabled={false}
                     autofocus
                     className="otp"
                  >
                  </OtpInput>
                  <button className='verify__btn'>Kodni Tasdiqlash</button>
               </form>
            }
         </React.Fragment>

      </div>
   )
}

export default Login
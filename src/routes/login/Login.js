import React, { useState } from 'react'
import OtpInput from 'otp-input-react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { FcGoogle } from 'react-icons/fc'
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../../server/index'


function Login() {
   const [userNumber, setUsetNumber] = useState("")
   const [userName, setUserName] = useState("")
   const [otp, setOtp] = useState("")
   const [submitted, setSubmitted] = useState(false)
   const regex = /^\+998[0-9]{9}$/
   const isValid = regex.test(userNumber);
   const [verifyOtp, setVerifyOtp] = useState(false)
   const nav = useNavigate()
   // const [loading, setLoading] = useState(false)

   // const auth = getAuth()
   // console.log(userNumber);
   // console.log(otp);

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

   // function onCaptchVerify() {
   //    window.recaptchaVerifier = new RecaptchaVerifier(
   //       "recaptcha-container",
   //       {
   //          'size': "invisible",
   //          'callback': (response) => {
   //             onSignup();
   //          },
   //          "expired-callback": () => { },
   //       },
   //       auth
   //    );
   // }
   // function onSignup() {
   //    setLoading(true);
   //    onCaptchVerify();
   //    const appVerifier = window.recaptchaVerifier;
   //     signInWithPhoneNumber(auth, userNumber, appVerifier)
   //       .then((confirmationResult) => {
   //          window.confirmationResult = confirmationResult;
   //          setLoading(false);
   //          setVerifyOtp(true);
   //       })
   //       .catch((error) => {
   //          console.log(error);
   //          setLoading(false);
   //       });
   // }
   // function onOTPVerify() {
   //    setLoading(true);
   //    window.confirmationResult
   //       .confirm(otp)
   //       .then(async (res) => {
   //          console.log(res);
   //          setLoading(false);
   //       })
   //       .catch((err) => {
   //          console.log(err);
   //          setLoading(false);
   //       });
   // }

   function googleSignIn() {
      signInWithPopup(auth, provider)
         .then(res => {
            setUserName(res.user.email)
            localStorage.setItem("email", res.user.email)
            nav("/")
            window.location.reload(true)
         })
         .catch(err => console.log(err))
   }


   return (
      <div className='login__container'>
         <React.Fragment>
            {!verifyOtp ?
               <form onSubmit={submit} className="login">
                  <h1>Raqamingizni Kiriting</h1>
                  <input maxLength={13} type="text" placeholder='+998 (__) ___-__-__' value={userNumber} onChange={(e) => setUsetNumber(e.target.value)} />
                  {submitted && !isValid && (<div style={{ color: 'red' }}>Notogri Raqam</div>)}
                  <button style={isValid ? { backgroundColor: "#262A2C" } : {}} >Kodni Qabul Qilish</button>
                  <div onClick={googleSignIn} className="google__login"><FcGoogle />  Google Orqali O'tish</div>
               </form>
               :
               <form className='verify__phone'>
                  <p>Kabinetga kirish uchun biz kodni ko'rsatilgan telefon raqamga SMS yuboramiz: <br /> +998988798002 <br /> <span onClick={() => setVerifyOtp(false)}>Raqamni Ozgartirish</span></p>
                  <input className='name__input' type="text" placeholder='Ismingiz' required value={userName} onChange={(e) => setUserName(e.target.value)} />
                  <OtpInput
                     value={otp}
                     onChange={(e) => setOtp(e.target.value)}
                     OTPLength={4}
                     otpType="number"
                     disabled={false}
                     autofocus
                     className="otp"
                  >
                  </OtpInput>
                  <button className='verify__btn'>Kodni Tasdiqlash</button>
                  <div id="recaptcha-container"></div>
               </form>
            }
         </React.Fragment>

      </div>
   )
}

export default Login
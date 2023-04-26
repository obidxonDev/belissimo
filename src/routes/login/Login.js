import React, { useState } from 'react'
import './Login.css'

function Login() {
   const [userNumber, setUsetNumber] = useState("")
   const regex = /^\+998[0-9]{9}$/
   const isValid = regex.test(userNumber);
   const [submitted, setSubmitted] = useState(false)

   const submit = (e) => {
      e.preventDefault()
      setSubmitted(true)
      if( isValid === true && userNumber.length ===  13){
         console.log("numbeer");
      } else{
         console.log("not number");
      }
   }
   // console.log(userNumber);
  return (
    <div className='login__container'>
      <form onSubmit={submit} className="login">
         <h1>Raqamingizni Kiriting</h1>
         <input type="text" placeholder='+998 (__) ___-__-__' value={userNumber} onChange={(e) => setUsetNumber(e.target.value)}/>
         {submitted && !isValid && ( <div style={{color: 'red'}}>Notogri Raqam</div>)}
         <button>Kodni Qabul Qilish</button>
      </form>
    </div>
  )
}

export default Login
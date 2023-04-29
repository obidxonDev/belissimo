import React from 'react'
import { useState } from 'react'
import './AddAdress.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AddAdress() {
   const [userAdress, setUserAdress] = useState({ street: '', home: '' })
   const dispatch = useDispatch()
   const nav = useNavigate()

   function submitAdress(e) {
      e.preventDefault()
      dispatch({
         type: "ADD_ADDRESS",
         payload: userAdress,
      })
      nav("/profil")
   }

   console.log(userAdress);
   return (
      <div className='address container'>
         <h1>Manzil Qo'shish</h1>
         <form onSubmit={submitAdress}>
            <input maxLength={20} required type="text" placeholder="Ko'changiz nomi"onChange={e => setUserAdress({ ...userAdress, street: e.target.value })} />
            <input maxLength={4} required type="text" placeholder='Uyingiz Raqami' onChange={e => setUserAdress({ ...userAdress, home: e.target.value })} />
            <button type='submit'>Qo'shish</button>
         </form>
      </div>
   )
}

export default AddAdress
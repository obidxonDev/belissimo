import React from 'react'
import { useState } from 'react'
import './AddAdress.css'

function AddAdress() {
   const [userAdress, setUserAdress] = useState({ street: '', home: '' })

   function submitAdress() {
      
   }

   console.log(userAdress);
   return (
      <div className='address container'>
         <h1>Manzil Qo'shish</h1>
         <form onSubmit={submitAdress}>
            <input type="text" placeholder="Ko'changiz nomi"onChange={e => setUserAdress({ ...userAdress, street: e.target.value })} />
            <input type="number" placeholder='Uyingiz Raqami' onChange={e => setUserAdress({ ...userAdress, home: e.target.value })} />
            <button>Qo'shish</button>
         </form>
      </div>
   )
}

export default AddAdress